import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";

const DesignersCard = () => {
  return (
    <>
      <Link
        to={"/designers_details"}
        // key={index}
        className="scroll-item shadow-xl  overflow-hidden inline-block m-2 w-52 bg-white rounded-lg"
      >
        <div className=" flex items-center">
          <img
            src={require("../../assets/images/d1.jpeg")}
            className=" w-full"
            alt=""
          />

          <img
            src={require("../../assets/images/d1.jpeg")}
            className="w-full"
            alt=""
          />
        </div>

        <div className=" py-4 text-center">
          <h6 className="h5">Supreme</h6>

          <p className=" text-xs text-black pt-3">147 listings</p>
          <Button  label={'follow'}  className={' bg-black text-white mx-auto uppercase text-xs py-1 mt-2'} />
        </div>
      </Link>
    </>
  );
};

export default DesignersCard;
