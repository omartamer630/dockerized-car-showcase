"use client";

import React from "react";

interface Props {
  title: string;
  to?: string;
  btnType?: "submit" | "submit"; // Removed initializer
  disable?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
}

const CustomButton: React.FC<Props> = ({
  title,
  to,
  handleClick,
  disable,
  buttonStyle,
  btnType, // Added default value in the component implementation
}) => {
  return (
    <button type={btnType || "button"} className={`custom-btn ${buttonStyle}`}>
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
