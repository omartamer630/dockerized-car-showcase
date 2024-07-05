"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const handleShowMore = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathNmae = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNmae, { scroll: false });
  };
  const handleShowLess = () => {
    const newLimit = (pageNumber - 1) * 10;
    const newPathNmae = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNmae, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          buttonStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleShowMore}
        />
      )}
    </div>
  );
};

export default ShowMore;
