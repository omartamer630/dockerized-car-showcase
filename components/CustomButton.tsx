"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
interface Props {
  title: string;
  to?: string;
  btnType?: "submit" | "submit"; // Removed initializer
  disable?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
  textStyle?: string;
  rightIcon?: string;
}

const CustomButton = ({
  title,
  to,
  handleClick,
  disable,
  buttonStyle,
  btnType,
  textStyle,
  rightIcon,
}: Props) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${buttonStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="arrow" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
