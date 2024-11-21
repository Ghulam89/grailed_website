import React, { useEffect, useState } from "react";
import CategoryCard from "../cards/CategoryCard";
import axios from "axios";

const Category = () => {
  const [allCategory, setAllCategory] = useState([
    {
      id: 1,
      image: require("../../assets/images/category1.webp"),
      name: "Toys",
    },
    {
      id: 2,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2629%20-%202111%20Womens%20Department-CT5?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Womens Cloting & Accessories",
    },
    {
      id:3,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2616%20-%202208%20Hybrid%20Brand%20C14_mens-clothing?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Mens Cloting & Accessories",
    },
    
    {
      id:4,
      image:"https://s7ap1.scene7.com/is/image/bigw/STSC-Girls?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Kids Cloting & Accessories",
    },
    {
      id:5,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2612%20-%202507_Unisexl_CT_3?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Baby Cloting & Accessories",
    },
    {
      id:6,
      image:"https://s7ap1.scene7.com/is/image/bigw/65141010609-SofaBeds_CT?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Furniture",
    },
    {
      id:7,
      image:"https://s7ap1.scene7.com/is/image/bigw/Home--Appliances-CT-2?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Home & Appliances",
    },
    {
      id:8,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2619_App_CT_3_240819_Books?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Books",
    },
    {
      id:9,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2603ToySaleCatalogueLaunchCT5TVs?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Tech & Audio",
    },
    {
      id:10,
      image:"https://s7ap1.scene7.com/is/content/bigw/W2619_App_CT_4_240819_Gaming?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Gaming",
    },
    {
      id:11,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2619_App_CT_6_240819_Bikes?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Sports",
    },
    {
      id:12,
      image:"https://s7ap1.scene7.com/is/image/bigw/W2605_1106_Homepage_CT_2_240606_Health?$cms-max-image-threshold$&fmt=webp-alpha&wid=211&fit=hfit%2C1&scale=0.5&qlt=88",
      name: "Health & Beauty",
    },
  ]);


  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h4 className="text-black font-medium text-2xl capitalize pt-8">
        Our top categories
      </h4>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 my-10">
        {allCategory?.map((item, index) => (
          <CategoryCard
            key={index}
            url={`/categories/${item?._id}`}
            image={item?.image}
            name={item?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
