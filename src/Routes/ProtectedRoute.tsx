import {useLocation} from "react-router-dom";
import {useAuth} from "../Context/useAuth";
import {Navigate} from "react-router-dom";
import {ReactNode} from "react";

type Props = { children: ReactNode };

const ProtectedRoute = ({children}: Props) => {
  const location = useLocation();
  const {isLoggedIn} = useAuth();

  return isLoggedIn() ? (
    <>{children}</>) : (
    <Navigate to="/login" state={{from: location}} replace/>
  );
};

export default ProtectedRoute;
