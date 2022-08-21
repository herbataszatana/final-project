import React from "react";
import BasicExample from "./Nav";
import ListChoice from "./Tabs"; 


const Home = () => {
  return (
    <>
       <div className="p-4 box mt-3 text-center">
       <BasicExample/>
       </div>
      <div className="p-4 box mt-3 text-center">
      <ListChoice/>
      </div>
    </>
  );
};

export default Home;
