import React, { useEffect, useState } from "react";
import BrandCard from "../cards/BrandCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { Link } from "react-router-dom";

const PopularBrands = () => {
  const [designer, setDesigner] = useState([
    {
      id: 1,
      logo: require("../../assets/images/brand1.wepb.webp"),
    },
    {
      id: 2,
      logo: require("../../assets/images/brand2.webp"),
    },
    {
      id: 3,
      logo: require("../../assets/images/brand3.webp"),
    },
    {
      id: 4,
      logo: require("../../assets/images/brand4.webp"),
    },
    {
      id: 5,
      logo: require("../../assets/images/brand5.webp"),
    },
    {
      id: 6,
      logo: require("../../assets/images/brand6.webp"),
    },
    {
      id: 7,
      logo: require("../../assets/images/brand7.webp"),
    },
    {
      id: 8,
      logo: require("../../assets/images/brand5.webp"),
    },
    {
      id: 8,
      logo: require("../../assets/images/brand5.webp"),
    },
    {
      id: 8,
      logo: require("../../assets/images/brand5.webp"),
    },
    {
      id: 8,
      logo: require("../../assets/images/brand5.webp"),
    },
  ]);

 

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-black font-medium text-xl">Top Brand</h4>
        <Link
          to={"/designers"}
          className="text-xs flex items-center gap-1 text-[#0000FF] font-extrabold"
        >
          <span>SEE ALL</span> <FaLongArrowAltRight color="#0000FF" />
        </Link>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 mt-4">
        {designer?.map((item, index) => (
          <BrandCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
