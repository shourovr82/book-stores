import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import SignUp from "../pages/Authentication/SignUp";
import { Login } from "../pages/Authentication/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/Books/AllBooks";
import { BookDetails } from "../pages/Books/BookDetails";
import AddNewBook from "../pages/Books/AddNewBook";
import MyBooks from "../pages/MyBooks/MyBooks";
import SingleBookTable from "../pages/MyBooks/SingleBookTable";
import MyAllBooks from "../pages/MyBooks/MyAllBooks";
import PrivateRoute from "./PrivateRoute";
import EditBook from "../pages/Books/EditBook";
import MyWishLists from "../pages/Wishlists/MyWishlists";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-books",
        element: <MyBooks />,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <MyAllBooks />
              </PrivateRoute>
            ),
          },
          {
            path: "/my-books/wishlist",
            element: (
              <PrivateRoute>
                <MyWishLists />
              </PrivateRoute>
            ),
          },
          {
            path: "/my-books/reading",
            element: (
              <PrivateRoute>
                <SingleBookTable />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
