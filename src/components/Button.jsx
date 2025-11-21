import React from "react";

const Button = ({
  children,
  onClick,
  className,
  bgColor = "#FCDF69",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }} // <-- dynamic background
      className={`
        flex items-center justify-center gap-[10px]
        w-[121px] h-[44px] 
        px-[20px] py-[12px]
        rounded-[30px]
        font-bold text-[15px]
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
