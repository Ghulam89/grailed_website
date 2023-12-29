import React from "react";
import HomeBanner from "../../components/HomeBanner";
import Button from "../../components/Button";
import Category from "../../components/category";
import ShopBanner from "../../components/shopbanner";
import PopularBrands from "../../components/popularBrands";
import ProductSlider from "../../components/sliders/productSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Featureds from "../../components/Featureds";
import Product from "../../components/cards/Product";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "",
      image: require("../../assets/images/product1.avif"),
    },
    {
      id: 2,
      title: "",
      image: require("../../assets/images/product2.avif"),
    },
    {
      id: 3,
      title: "",
      image: require("../../assets/images/product3.avif"),
    },
    {
      id: 4,
      title: "",
      image: require("../../assets/images/product4.avif"),
    },
    {
      id: 5,
      title: "",
      image: require("../../assets/images/product1.avif"),
    },
    {
      id: 6,
      title: "",
      image: require("../../assets/images/product3.avif"),
    },
    {
      id: 7,
      title: "",
      image: require("../../assets/images/product4.avif"),
    },
  ];

  return (
    <div>
      <HomeBanner />
      <div className=" container mx-auto py-10">
        <div className=" flex  px-4 items-center justify-between">
          <h4 className=" h4">Recently Viewed</h4>
        </div>
        <ProductSlider
          items={data.map((item, index) => {
            return (
              <>
                <Product item={item.image} />
              </>
            );
          })}
        />
      </div>
      <Category />
      <Featureds />
      <PopularBrands />

      <div className=" container mx-auto py-10">
        <div className=" flex items-center px-4  justify-between">
          <div>
            <h4 className=" text-black font-medium text-xl">Staff Picks</h4>
          </div>
          <div>
            <p className=" text-xs flex items-center gap-1 text-[#0000FF]   font-extrabold">
              {" "}
              <span>SEE ALL </span> <FaLongArrowAltRight color="#0000FF" />{" "}
            </p>
          </div>
        </div>
        <ProductSlider
          items={data.map((item, index) => {
            return (
              <>
                <Product item={item.image} />
              </>
            );
          })}
        />
      </div>
      <ShopBanner />
    </div>
  );
};

export default Home;
