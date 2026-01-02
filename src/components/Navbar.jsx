import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import home from "../assets/icons/home.svg";
import notification from "../assets/icons/notification.svg";
import Logout from "./common/Logout";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = state?.user ?? auth?.user;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* <!-- Logo --> */}
          <Link to="/">
            <img className="max-w-25 rounded-full lg:max-w-32.5" src={logo} />
          </Link>
          {/* <!-- nav links  --> */}

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={home} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={notification} alt="Notification" />
            </button>
            <Logout />

            <Link to={"/profile"} className="flex-center ml-8! gap-3">
              <span className="text-lg font-medium lg:text-xl">
                {user.firstName}
                {""} {user.lastName}
              </span>
              {!user.avatar ? (
                <IoPersonSharp className="h-8 w-8  rounded-full" />
              ) : (
                <img
                  className="h-8 w-8 lg:h-11 lg:w-11 rounded-full"
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`}
                  alt="avatar"
                />
              )}
            </Link>
          </div>
          {/* <!-- nav links ends --> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
