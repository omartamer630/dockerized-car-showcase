"use client";
import React, { use } from "react";
import { calculateCarRent } from "@/utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface Props {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarProps {
  car: Props;
}

const CarCard = ({ car }: CarProps) => {
  const {
    city_mpg,
    class: carClass,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const [isOpen, setIsOpen] = React.useState(false);
  const img = generateCarImageUrl(car);
  const rentRate = calculateCarRent(city_mpg, year);
  const handleClick = () => {
    setIsOpen(true);
    console.log("Button clicked");
  };
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {rentRate}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"steering-wheel.svg"}
              alt="steering wheel"
              height={20}
              width={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"tire.svg"} alt="tire" height={20} width={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"gas.svg"} alt="gas" height={20} width={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            buttonStyle="w-full py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-[14] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleClick}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
export type { CarProps, Props };
