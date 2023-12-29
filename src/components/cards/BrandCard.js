import React from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
  return (
    <Link className=" text-center">
      <img
        src={require("../../assets/images/brand1.avif")}
        className="  border rounded-full w-full"
        alt=""
      />
    </Link>
  );
};

export default BrandCard;
