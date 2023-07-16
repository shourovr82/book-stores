import useAuthCheck from "../hooks/useAuthCheck";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const authCheck = useAuthCheck();
  return !authCheck ? (
    <div>Checking Authentication...</div>
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
