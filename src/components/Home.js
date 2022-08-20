import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import AddList from "./AddList";
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

const Home = () => {
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
      <div className="p-4 box mt-3 text-center">
      <AddList/>
      </div>
      <div className="p-4 box mt-3 text-center">
        <IconButton variant="primary" onClick={handleLogout}>
          <LogoutIcon/>
        </IconButton>
      </div>
    </>
  );
};

export default Home;
