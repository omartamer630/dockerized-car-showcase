import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Nav = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1140px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            className="object-contain"
            src={"/logo.svg"}
            width={118}
            height={18}
            alt="logo"
          ></Image>
        </Link>
        <CustomButton title="Sign In" buttonStyle="bg-white rounded-full" />
      </nav>
    </header>
  );
};

export default Nav;
