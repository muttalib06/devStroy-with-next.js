import FoodCard from "@/components/foodCard/FoodCard";
import React from "react";
const getFoodsData = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = res.json();
  return data;
};
const page = async () => {
  const foodsData = await getFoodsData();
  const foods = foodsData.foods;

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-8">
        Foods({foods.length})
      </h1>

      <div className="max-w-[90%] mx-auto grid grid-cols-4 gap-10">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default page;
