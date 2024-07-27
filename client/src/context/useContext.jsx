import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import logo from "/logo.png";
// User Context
const UserContext = createContext();

export const AdminProvider = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState();
  console.log(user)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const verifyCookie = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("http://localhost:4000/auth/", {}, { withCredentials: true });
        if (!data.status) {
          navigate("/sign-in-as-admin");
        } else {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setLoading(false);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <UserContext.Provider value={user}>
      {loading ? (
        <div className="flex justify-center items-center h-[80vh] animate-pulse">
          <img className="h-[150px] w-[150px]" src={logo} alt="logo" />
        </div>
      ) : (
        <Outlet />
      )}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
