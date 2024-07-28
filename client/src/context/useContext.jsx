import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import io from "socket.io-client";
import { SOCKET_SERVER_PORT } from "../lib/apiKeys";
import axios from "axios";
import logo from "/logo.png";
// User Context
const UserContext = createContext();

export const AdminProvider = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState();
  console.log("user: ", user)
  const [loading, setLoading] = useState(false);
  const [socket, setSocket] = useState([]);
  const [driverLocation, setDriverLocation] = useState([]);
  console.log(driverLocation)
  console.log(SOCKET_SERVER_PORT)
  useEffect(() => {
    //!IF NOT WORKING USE STRING INSTEAD OF VARIABLES OR ENV
    const socket = io("http://localhost:8080");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Socket.IO connected");
    });

    socket.on("location", (data) => {
      setDriverLocation(data);
    });

    socket.on("disconnect", () => {
      console.log("Socket.IO disconnected");
      // socket.on("connect", () => {
      //   console.log("Socket.IO reconnected");
      // });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const verifyCookie = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("http://localhost:4000/auth/", {}, { withCredentials: true });
        if (!data.status) {
          removeCookie("biyahe-user-tk")
          navigate("/sign-in-as-admin");
        } else {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <UserContext.Provider value={{ user, driverLocation, setDriverLocation }}>
      {loading ? (
        <div className="flex justify-center items-center w-full h-cover animate-pulse">
          <div className="h-[150px] w-[150px]">
            <img src={logo} alt="logo" />
            <h1 className="text-center text-4xl text-primary font-bold">BIYAHE</h1>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
