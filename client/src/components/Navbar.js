import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slice/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  return (
    <>
      <div className="navbar -flex align-items-center justify-content-between p-3 p-lg-4 px-lg-5 bg-purple">
        <h3 className="fw-800">FOTOFOLIO</h3>
        <button
          className="logout-btn "
          radius="md"
          onClick={() => {
            dispatch(logoutUser());
            removeCookie("token");
            removeCookie("userId");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
