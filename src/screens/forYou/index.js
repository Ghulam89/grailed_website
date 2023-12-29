import React from "react";
import ProductSlider from "../../components/sliders/productSlider";
import Product from "../../components/cards/Product";
import DesignersCard from "../../components/cards/DesignersCard";

const ForYou = () => {


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
    <div className=" container mx-auto py-5">
      <h1 className="h1">For You</h1>

      {/* recommended for you */}

      <div className=" py-10">
        <h4 className="h4">Recommended For You</h4>
        <div className=" pt-3">
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
      </div>

      {/* Discover Daily */}

      <div className=" py-10">
        <h4 className="h4">Discover Daily</h4>
        <div className=" pt-3">
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
      </div>

      {/* Designers For You */}

      <div className=" py-10">
        <h4 className="h4">Designers For You</h4>
        <div className=" pt-3">
          <ProductSlider
            items={data.map((item, index) => {
              return (
                <>
                  <DesignersCard item={item.image} />
                </>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default ForYou;
