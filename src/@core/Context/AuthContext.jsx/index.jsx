import { createContext, useEffect, useState } from "react";
import AuthServices from "../../Services/AuthServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //hooks
  const [user, setUser] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const userData = JSON?.parse(localStorage.getItem("userData"));
    const accessToken = JSON?.parse(localStorage.getItem("accessToken"));
    setUser(userData);
    setAccessToken(accessToken);
  }, []);

  // Functions
  const handleLogin = async (body, navigate) => {
    const { data } = await AuthServices.login(body);
    if (data?.data?.user) {
      window.localStorage.setItem("userData", JSON.stringify(data?.data?.user));
      window.localStorage.setItem(
        "accessToken",
        JSON.stringify(data?.data?.tokens?.accessToken)
      );
      window.localStorage.setItem(
        "roles",
        JSON.stringify(data?.data?.user?.role?.code)
      );
      navigate("/dashboard");
    }
  };

  const handleLogout = async (navigate) => {
    window.localStorage.clear();
    setUser("");
    navigate("/login");
  };

  const values = {
    handleLogin,
    user,
    setUser,
    accessToken,
    setAccessToken,
    handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
