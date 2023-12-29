import React from "react";
import Button from "../../components/Button";
import { TiUpload } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
const Sells = () => {
  return (
    <div className=" container mx-auto py-4">
      <div className=" flex justify-between ">
        <div className=" w-[70%]">
          <div className=" flex gap-2">
            <div>
              <img
                src={require("../../assets/images/product1.avif")}
                className=" w-16 rounded-full h-16"
                alt=""
              />
            </div>
            <div>
              <h1 className="h2">gm6681464</h1>
              <p className=" text-black text-lg">Joined in 2023</p>
              <div className=" flex  w-full gap-3 mt-2 items-center  justify-between">
                <div className="">
                 
                  <div className=" flex items-center pt-5  gap-1">
                    <SlLocationPin size={12} className=" text-gray-500" />
                    <span className=" text-gray-500  text-sm font-medium">
                      Other
                    </span>
                  </div>
                </div>
                <div className=" flex  items-center gap-3">
                  <div>
                    <span className=" text-black font-bold"></span>
                    <p className=" text-gray-500  text-sm pt-5">No feedback yet</p>
                  </div>
                  <div>
                    <span className=" text-black font-bold">0</span>
                    <p className=" text-gray-500  text-sm">Transactions</p>
                  </div>
                  <div>
                    <span className=" text-black font-bold">0</span>
                    <p className=" text-gray-500  text-sm">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <Link to={"/new_listing"}>
            <Button
              label={"+ new listing"}
              className={" uppercase bg-black  py-3  text-xs text-white"}
            />
          </Link>

          <button className=" border p-3">
            <TiUpload />
          </button>
        </div>
      </div>

      <div className=" mt-12 flex">
        <div className=" w-[15%]">
          <p className=" uppercase text-black text-sm   font-semibold">
            my items
          </p>
          <ul>
            <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                for sale
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                sold
              </Link>
            </li>
            {/* <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                drafts
              </Link>
            </li> */}
          </ul>

          <p className=" uppercase  mt-8 text-black text-sm   font-semibold">
            MY PROFILE
          </p>
          <ul className="">
            <li>
              <Link
                to={"/sell/feed_back"}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                FEEDBACK
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                VACATION MODE
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                PAYMENTS
              </Link>
            </li>
            {/* <li>
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                SETTINGS
              </Link>
            </li> */}
            <li className=" mt-4">
              <Link
                to={""}
                className=" uppercase text-gray-400 text-sm  font-normal"
              >
                HELP
              </Link>
            </li>
          </ul>
        </div>
        <div>
         <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Sells;
