import React from "react";
import ListChoice from "./ListChoicesTabs"; 

const Lists = () => {
  return (
    <>
      <div className="p-4 box mt-3 text-center">
      <h1><b>Your lists</b></h1>
      <ListChoice/>
      </div>
    </>
  );
};

export default Lists;
