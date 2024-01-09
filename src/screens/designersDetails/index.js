import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ProductSlider from "../../components/sliders/productSlider";
import DesignersCard from "../../components/cards/DesignersCard";
import Accordion from "../../components/Accordion/Accordion";
import Product from "../../components/cards/Product";

const DesignersDetails = () => {
  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
    "Product 3",
  ];

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Department",
      data: "splashText2",
      isOpen: false,
    },
    {
      key: 2,
      title: "Category",
      data: "splashText3",
      isOpen: false,
    },
    {
      key: 3,
      title: "Size",
      data: "splashText3",
      isOpen: false,
    },
    {
      key: 4,
      title: "Designer",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 4,
      title: "Price",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 5,
      title: "Condition",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 6,
      title: "Filter By Keyword",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 6,
      title: "Location",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 7,
      title: "Show Only",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 8,
      title: "Market",
      data: "Designer",
      isOpen: false,
    },
    {
      key: 9,
      title: "Followed Searches",
      data: "Designer",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" container px-7 mx-auto">
      <div className=" flex gap-2 py-3">
        <p className=" text-black  text-xs border-b">Designers</p>

        <span className=" text-gray-300 text-xs font-semibold">
          Acne Studios
        </span>
      </div>

      <div className="">
        <div className=" h-52 w-full">
          <img
            src={require("../../assets/images/dd1.avif")}
            className=" w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="  lg:flex block gap-2 justify-between py-8">
          <div className=" flex gap-5">
            <img
              src={require("../../assets/images/dd1.avif")}
              className=" w-16 h-16  border rounded-full"
              alt=""
            />
            <div>
              <h2 className="h2">Acne Studios</h2>
              <Link to={""} className=" decoration-black">
                18.2k listings
              </Link>
            </div>
          </div>
          <div className="lg:w-[60%] w-[100%]">
            <div className=" sm:flex block justify-between">
              <div className=" sm:w-[70%] w-[100%]">
                <p>
                  “Ambition to Create Novel Expression” is the mission statement
                  and name of Jonny Johansson’s brand Acne Studios. Founded in
                  Sweden in 1996, Acne Studios started out producing raw denim
                  and has since expanded into a full, head-to-toe clothing
                  brand. At the height of the minimalist, “upscale basics” trend
                  of the 2010s, Acne Studios rose in...
                </p>
                <Link to={""} className=" decoration-black">
                  Show More
                </Link>
              </div>
              <div>
                <Button
                  label={"follow"}
                  className={" uppercase  text-xs py-1 text-white bg-black"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* search filter */}

      <div className=" pt-10">
        <p className=" text-xs text-black  font-medium">RELATED SEARCHES</p>

        <div className="scroll-container mt-3  flex gap-5 items-center productOverflow  overflow-x-auto whitespace-nowrap">
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
          <Button
            label={"ACNE STUDIOS MEN'S CLOTHING"}
            className={" bg-white text-black  border py-3 text-xs"}
          />
        </div>
      </div>

      {/* Designers For You */}

      <div className=" py-10">
        <h4 className="h4">Related Designers</h4>
        <div className=" pt-3">
          <ProductSlider
            items={products.map((item, index) => {
              return (
                <>
                  <DesignersCard />
                </>
              );
            })}
          />
        </div>
      </div>

      <div className=" container   mx-auto py-10">
        <div className=" bg-white py-3 z-40 sticky top-20 flex justify-between items-center">
          <div>
            <h6 className="h6">306,182 listings</h6>
          </div>

          <div className=" flex items-center gap-2">
            <Button
              label={"follow"}
              className={
                " bg-black uppercase text-xs py-1 font-bold  text-white"
              }
            />
            <div className=" md:block hidden ">
              <select className="  border py-1  bg-lightGray  uppercase  text-primary placeholder:text-primary ">
                <option className="">Sort by: default</option>
                <option>Sort by: trending</option>
                <option>Sort by: low price</option>
                <option>Sort by: high price</option>
                <option>Sort by: new</option>
                <option>Sort by: popular</option>
              </select>
            </div>

            <Button
              label={"filter"}
              onClick={toggleMenu}
              className={
                "bg-black  block md:hidden uppercase text-xs py-1 font-bold  text-white"
              }
            />
          </div>
        </div>

        <div className=" flex  pt-4 gap-12">
          <div
            className={`w-[20%]  bg-white ${
              isMenuOpen
                ? "block absolute  text-center p-5 top-0 right-0  z-50 left-0 w-[100%] h-full bg-white"
                : "w-[20%] hidden lg:block  bg-white"
            }`}
          >
            <div className="bg-[#f7f7ff] p-4 pb-10">
              <p className=" text-xs text-gray-600 font-semibold">
                Set up to filter out listings that are not in your size.
              </p>
              <Button
                label={"add my sizes"}
                className={
                  " bg-white border w-full uppercase text-xs py-2 mt-3 font-bold"
                }
              />
            </div>

            {/*   department */}

            <div className=" mx-auto ">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>

            <Button
              label={"Follow this search"}
              className={
                " uppercase border bg-white text-black  font-bold py-2 w-full text-xs"
              }
            />

            <p className=" text-xs text-gray-400 font-semibold pt-2">
              Get updates when new listings matching your filters are added.
              MANAGE FOLLOWED SEARCHES
            </p>
          </div>
          <div className="">
            <div className="grid item1 mx-auto col-span-2  mt-3  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignersDetails;
