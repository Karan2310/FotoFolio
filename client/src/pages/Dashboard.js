import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { SERVER_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logoutUser } from "../slice/UserSlice";
import Navbar from "../components/Navbar";
import ScreenTabs from "../components/ScreenTabs";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          "x-auth-token": cookies.token,
        },
      };
      const { data } = await axios.get(`${SERVER_URL}/auth/verify`, config);
      dispatch(setUser(data));
    } catch (err) {
      removeCookie("token");
      removeCookie("userId");
      alert("You have been logged out!");
      Navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="body p-3 p-lg-4 px-lg-5">
        <h2 className="fw-700">Welcome {user.name},</h2>
        <div className="my-5">
          <ScreenTabs />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
