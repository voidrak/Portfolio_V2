import React from "react";

const Text3D = ({ primary, secondary }) => {
  return (
    <div className="textContainer   relative  ">
      <p className="primary">{primary}</p>
      <p className="secondary">{secondary}</p>
    </div>
  );
};

export default Text3D;
