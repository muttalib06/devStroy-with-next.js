import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-200 animate-pulse">
        {/* Category Badge Skeleton */}
        <div className="absolute top-3 right-3 bg-gray-300 px-3 py-1 rounded-full w-20 h-6 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
          <div className="w-10 h-4 bg-gray-200 rounded animate-pulse ml-1"></div>
        </div>

        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
        </div>
      </div>
    </div>
  );
};
export default FoodCardSkeleton;
