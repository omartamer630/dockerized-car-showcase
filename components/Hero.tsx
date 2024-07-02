import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent A Car Quick and Super Easy !
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          buttonStyle={" bg-primary-blue text-white rounded-full mt-10"}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} className="object-contain" alt="car" fill />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
