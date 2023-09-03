import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slice/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token", "userId"]);
  return (
    <>
      <div className="navbar -flex align-items-center justify-content-between p-3 p-lg-3 px-lg-5 bg-purple">
        <div className="d-flex align-items-center ">
          <div className="bg-white rounded-3 p-0 me-2">
            <img
              className="p-0 m-0 img-fluid"
              src="/FotoFolio.png"
              alt="Description of the image"
              style={{ width: "30px" }}
            />
          </div>
          <h3 className="fw-800">FOTOFOLIO</h3>
        </div>
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
