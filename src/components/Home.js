import React from "react";
import TopNav from "./Nav";
import ListChoice from "../components/Lists/ListChoicesTabs"; 


const Home = () => {
  return (
    <>
    <TopNav/>

    <div className="p-4 box mt-3 text-center">
      <h1><b>Your lists</b></h1>
      <ListChoice/>
    </div>
      </>
  );
};

export default Home;
