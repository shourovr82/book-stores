import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import SignUp from "../pages/Authentication/SignUp";
import { Login } from "../pages/Authentication/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes= createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children: [
      {
        index: true,
        element : <HomePage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      
    ]
  },{
    path: "*",
    element: <ErrorPage/>
  }
])

export default routes;