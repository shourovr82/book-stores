import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { accessToken } = useAppSelector(
    (state: RootState) => state.auth || {}
  );

  const { pathname } = useLocation();

  if (!accessToken) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
