import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/auth.slice";

export const useAuth = () => {
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (response) => dispatch(login(response));
  const logout = () => dispatch(logout);

  return {
    accessToken,
    refreshToken,
    logout,
    login,
  };
};
