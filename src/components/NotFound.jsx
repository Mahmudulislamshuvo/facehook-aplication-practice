import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      div
      className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4"
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00C38B]/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-10 w-10 text-[#00C38B]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>

      {/* Text Content */}
      <h1 className="mb-2 text-6xl font-bold text-[#00C38B]">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-white">Page Not Found</h2>
      <p className="mb-8 text-gray-400">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-[#00C38B] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Go Back Home
        </Link>

        {/* FIX 2: Use navigate(-1) for better Router integration */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-transparent px-6 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5"
        >
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
