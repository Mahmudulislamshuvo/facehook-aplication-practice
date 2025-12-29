import { useEffect, useEffectEvent } from "react";
import { api } from "../api/Index";
import { useAuth } from "./useAuth";
import axios from "axios";

const useAxios = () => {
  const { auth, setAuth } = useAuth();

  // ১. রিকোয়েস্ট ইন্টারসেপ্টর লজিক (useEffectEvent দিয়ে র‍্যাপ করা)
  // এটি বাইরে থাকবে, যাতে সবসময় লেটেস্ট 'auth' পায়
  const addTokenToRequest = useEffectEvent((config) => {
    const authToken = auth?.authToken;
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

  // ২. রেসপন্স ইন্টারসেপ্টর / রিফ্রেশ লজিক (useEffectEvent দিয়ে র‍্যাপ করা)
  const handleRefreshToken = useEffectEvent(async (originalRequest) => {
    try {
      const refreshToken = auth?.refreshToken;

      if (!refreshToken) {
        setAuth({});
        return Promise.reject(new Error("No refresh token available"));
      }

      // নতুন টোকেন রিকোয়েস্ট
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
        { refreshToken }
      );

      const { token } = response.data;
      // স্টেট আপডেট
      setAuth((prevAuth) => ({ ...prevAuth, authToken: token }));

      // ফেইল হওয়া রিকোয়েস্টে নতুন টোকেন বসিয়ে আবার পাঠানো
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return axios(originalRequest);
    } catch (error) {
      setAuth({});
      return Promise.reject(error);
    }
  });

  useEffect(() => {
    // Request Interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => addTokenToRequest(config),
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          return handleRefreshToken(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    // cleanup function to eject interceptors
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return api;
};

export default useAxios;

// import { useEffect } from "react";
// import { api } from "../api/Index";
// import { useAuth } from "./useAuth";
// import axios from "axios";

// const useAxios = () => {
//   const { auth, setAuth } = useAuth();

//   useEffect(() => {
//     // aad a request interceptor
//     const requestIntersept = api.interceptors.request.use(
//       (config) => {
//         const authToken = auth?.authToken;
//         if (authToken) {
//           config.headers.Authorization = `Bearer ${authToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // add a response interceptor
//     const responseIntersept = api.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true;

//           try {
//             // attempt to refresh token
//             const refreshToken = auth?.refreshToken;
//             const response = await api.post(
//               `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
//               { refreshToken }
//             );

//             const { token } = response.data;
//             console.log("New Token:", token);
//             setAuth((prevAuth) => ({ ...prevAuth, authToken: token }));

//             // update auth context with new token
//             originalRequest.headers.Authorization = `Bearer ${token}`;

//             return axios(originalRequest);
//           } catch (error) {
//             console.log(error);
//             throw error;
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     // cleanup function to eject interceptors
//     return () => {
//       // eject request and response interceptor
//       api.interceptors.request.eject(requestIntersept);
//       api.interceptors.response.eject(responseIntersept);
//     };
//   }, [auth.authToken]);

//   return api;
// };
