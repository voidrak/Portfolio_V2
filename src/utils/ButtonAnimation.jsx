import React from "react";

const ButtonAnimation = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  return (
    <div
      className="roundButton relative flex cursor-pointer items-center  justify-center rounded-[3em] border border-[rgb(136,136,136)] px-[60px] py-[15px]   "
      style={{ backgroundColor }}
      {...attributes}
    >
      {children}
      <div
        className="circle absolute top-[100%] h-[150%] w-[100%] rounded-[50%] "
        style={{ backgroundColor }}
      ></div>
    </div>
  );
};

export default ButtonAnimation;
