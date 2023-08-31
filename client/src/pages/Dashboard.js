import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { SERVER_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logoutUser } from "../slice/UserSlice";
import Navbar from "../components/Navbar";
import ScreenTabs from "../components/ScreenTabs";
import AddImage from "../components/AddImage";
import { setPosts } from "../slice/PostSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const [refreshPage, setRefreshPage] = useState(false);

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
      // alert("You have been logged out!");
      Navigate("/login");
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/posts/`);
      dispatch(setPosts(res.data));
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const changeRefresh = () => {
    setRefreshPage(!refreshPage);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getAllPosts();
  }, [refreshPage]);

  return (
    <>
      <Navbar />
      <div className="body p-3 p-lg-4 px-lg-5">
        <h2 className="fw-700 mt-3 mt-md-1">Welcome {user.name},</h2>
        <div className="my-3 my-lg-2">
          <ScreenTabs />
        </div>
        <AddImage changeRefresh={changeRefresh} />
      </div>
    </>
  );
};

export default Dashboard;
