import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" className="flex">
              <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="/all-books"
              title="all-books"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              All Books
            </Link>

            <Link
              to="/add-new-book"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Add New Book
            </Link>

            <a
              href="#"
              title=""
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Resources{" "}
            </a>

            <Link
              to="/my-books"
              title="My books"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              My Books
            </Link>
          </div>

          {/* menu button */}
          <div>
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
              <div className="" role="none">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/add-new-book"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Add New Book
                </Link>
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

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
