import React from "react";
import TopNav from "./Nav";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { IconButton } from '@mui/material';


const Profile = () => {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <>
    <TopNav/>
      <div className="p-4 box mt-3 text-center">
      <h1>Profile</h1>
      <h1>Hi  </h1>
      <IconButton variant="primary" onClick={handleLogout}>
                    Log out
        </IconButton>
      </div>
    </>
  );
};

export default Profile;
