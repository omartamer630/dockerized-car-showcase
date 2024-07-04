"use client";
import React from "react";
import Image from "next/image";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { CarProps } from "@/components/CarCard"; // Import the component and types

interface Props {
  isOpen: boolean;
  // car: CarProps;
  closeModel: () => void;
}

const CarDetails = ({ isOpen, closeModel }: Props) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className={"relative z-10"} onClose={closeModel}>
        <TransitionChild>
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
