import React from "react";
import Reveal from "../../utils/Reveal";
import PopupEffect from "../../utils/PopupEffect";

const Portal = () => {
  return (
    <PopupEffect>
      <div className=" main">
        <div className="circle-div div-1"></div>
        <div className="circle-div div-2"></div>
        <div className="circle-div div-3"></div>
        <div className="circle-div div-4"></div>
        <div className="circle-div div-5"></div>
      </div>
    </PopupEffect>
  );
};

export default Portal;
