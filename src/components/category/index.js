import React from "react";
import CategoryCard from "../cards/CategoryCard";

const Category = () => {
  return (
    <div className=" container px-4 mx-auto  py-10">
      <h4 className=" text-black font-medium text-xl">Shop Menswear</h4>

      <div className="grid item1 col-span-2  mt-3  xl:grid-cols-6  grid-cols-2 gap-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      <h4 className=" text-black font-medium  pt-6 text-xl">Shop Womenswear</h4>

      <div className="grid item1 col-span-2  mt-3  xl:grid-cols-6  grid-cols-2 gap-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Category;
