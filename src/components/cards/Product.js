import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({item}) => {
  return (
    <>
      <Link
        to={"/product_details"}
        // key={index}
        className="scroll-item inline-block m-2 w-52 bg-white rounded"
      >
        <div className="  relative h-52">
          <img
            src={item}
            className="  object-cover   w-full h-full"
            alt=""
          />
          <span className=" uppercase  font-bold  text-xs absolute top-2  left-2 bg-black text-white px-2 py-1">
            Staff pick
          </span>
        </div>
        <div>
          <div className=" flex p-2 justify-between">
            <span className=" text-xs">about 4 hours age</span>
            <span className=" text-xs  line-through">(about 1 month)</span>
          </div>
          <hr />
          <div className=" p-2">
            <div className=" flex justify-between items-center">
              <h6 className=" text-black font-semibold text-sm">
                KIKO KOSTADINOV
              </h6>
              <p className=" font-semibold">S</p>
            </div>
            <p className=" text-xs text-black">Derby oval zip up shirt</p>
            <div className=" flex justify-between items-center">
              <h6 className="">
                <span className=" text-red-700  font-bold text-sm">$324</span>{" "}
                <span className=" text-gray-400  line-through text-sm  font-extrabold">
                  $380
                </span>{" "}
                <span className=" text-xs">10% off</span>{" "}
              </h6>
              <FaHeart   />
            </div>
          </div>
        </div>
      </Link>
      
    </>
  );
};

export default Product;
