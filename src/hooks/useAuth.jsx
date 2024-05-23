import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const useAuth = () => {
  const allInfo = useContext(AuthContext);
  return allInfo;
};

export default useAuth;
