import { useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  return children;
}

export default RequireAuth;
