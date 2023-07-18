import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { userLoggedOut } from "../redux/features/user/authSlice";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state?.auth || {});
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    toast.success("Logged Out Successfully !!");
    setIsOpen(false);
  };

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center  justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" className="flex">
              <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="flex justify-center  items-center ">
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="/all-books"
                title="all-books"
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                All Books
              </Link>
              {user && (
                <Link
                  to="/add-new-book"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Add New Book
                </Link>
              )}
              {user && (
                <Link
                  to="/my-books"
                  title="My books"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  My Books
                </Link>
              )}
            </div>
          </div>

          {/* menu button */}
          <div className="flex justify-center items-center gap-4">
            {user && (
              <div>
                {user?.fullName && (
                  <p className="text-xs font-semibold text-slate-600">
                    Welcome {user?.fullName}
                  </p>
                )}
              </div>
            )}
            <div className="">
              <button
                type="button"
                className="inline-flex justify-center w-full p-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-all duration-300 active:scale-90"
                id="menu-button"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
              >
                <TfiMenu />
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right top-16 right-5 absolute  mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div>
                  {user && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/add-new-book"
                      className="block px-4 rounded py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Add New Book
                    </Link>
                  )}
                  {!user && (
                    <>
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Sign Up
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Sign In
                      </Link>
                    </>
                  )}
                  {user && (
                    <button
                      type="button"
                      onClick={() => handleLogout()}
                      className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  )}

                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/all-books"
                    className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    All Books
                  </Link>

                  {user && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/my-books"
                      title="My books"
                      className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded"
                      role="menuitem"
                    >
                      My Books
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
