import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/icons/registration.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password");

  const handleRegisterForm = async (formData) => {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        payload
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
      <div className="max-w-342 flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          {/* Left */}
          <div>
            <img className="mb-12 h-60" src={registerImg} alt="register" />
            <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
            <p className="max-w-113 text-gray-400/95 lg:text-lg">
              Create a social media app with posts, reactions, comments and
              profile.
            </p>
          </div>

          {/* Form */}
          <div className="card">
            <form
              onSubmit={handleSubmit(handleRegisterForm)}
              className="border-b border-[#3F3F3F] pb-10 lg:pb-7.5"
            >
              {/* First Name */}
              <div className="form-control">
                <label className="auth-label">First Name</label>
                <input
                  className="auth-input"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="form-control">
                <label className="auth-label">Last Name</label>
                <input
                  className="auth-input"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="auth-label">Email</label>
                <input
                  className="auth-input"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="auth-label">Password</label>
                <input
                  className="auth-input"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-control">
                <label className="auth-label">Retype Password</label>
                <input
                  className="auth-input"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
              >
                Register
              </button>
            </form>

            <div className="py-4">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                Already have an account?{" "}
                <Link
                  className="text-white hover:text-lwsGreen hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
