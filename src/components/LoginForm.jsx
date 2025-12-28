import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
    navigate("/");
  };

  return (
    <>
      <div className="card">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="border-b border-[#3F3F3F] pb-10 lg:pb-15"
        >
          {/* <!-- email --> */}
          <div className="form-control">
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              className={`auth-input ${errors.email ? "border-red-500" : ""}`}
              name="email"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                maxLength: 80,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {/* error */}
          <div className="h-4">
            {" "}
            {/* ফিক্সড হাইট */}
            {errors.email && (
              <p className="text-sm text-red-500 animate-fadeIn">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* <!-- password --> */}
          <div className="form-control">
            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <input
              className={`auth-input ${
                errors.password ? "border-red-500" : ""
              }`}
              name="password"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>
          {/* error */}
          <div className="h-4 mb-2">
            {/* ফিক্সড হাইট  */}
            {errors.password && (
              <p className="text-sm text-red-500 animate-fadeIn">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* <!-- Submit --> */}
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="py-4 lg:py-6">
          <p className="text-center text-xs text-gray-600/95 lg:text-sm">
            Don’t have account?
            <Link
              className="text-white transition-all hover:text-lwsGreen hover:underline"
              to="/registration"
            >
              Create New
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
