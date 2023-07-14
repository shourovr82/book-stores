import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import SignUp from "../pages/Authentication/SignUp";
import { Login } from "../pages/Authentication/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/Books/AllBooks";
import { BookDetails } from "../pages/Books/BookDetails";
import AddNewBook from "../pages/Books/AddNewBook";

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
        element: <BookDetails />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
