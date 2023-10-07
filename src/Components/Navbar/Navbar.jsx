import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../useAuthContext";
import ProfileAvatar from "../Profile/ProfileAvatar/ProfileAvatar";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  // handleLogOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active font-bold"
              : isPending
              ? "pending"
              : " text-black font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active font-bold"
              : isPending
              ? "pending"
              : " text-black font-bold"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive, isPending }) =>
            isActive
              ? "active font-bold"
              : isPending
              ? "pending"
              : " text-black font-bold"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="my-7">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sm:h-7 sm:w-7 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          <Link className=" normal-case text-xl">
            <img
              src="https://sport.7uptheme.net/wp-content/uploads/2017/07/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center ">
            <div className="mr-2 sm:mr-5">
              {user && <ProfileAvatar></ProfileAvatar>}
            </div>
            {user ? (
              <button
                onClick={handleLogOut}
                className=" btn btn-neutral sm:btn-md btn-sm font-extrabold"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className=" btn btn-neutral sm:btn-md btn-sm font-extrabold"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Navbar;
