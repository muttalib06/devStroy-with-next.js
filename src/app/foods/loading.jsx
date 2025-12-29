"use client";
import FoodCardSkeleton from "@/components/skeleton/FoodCardSkeleton";
import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {[...Array(50)].map((index) => (
        <FoodCardSkeleton key={index}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default Loading;
