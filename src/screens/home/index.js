import React, { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import Category from "../../components/category";
import ShopBanner from "../../components/shopbanner";
import PopularBrands from "../../components/popularBrands";
import ProductSlider from "../../components/sliders/productSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Featureds from "../../components/Featureds";
import Product from "../../components/cards/Product";
import axios from "axios";
import Footer from "../../components/footer";
import { Base_url } from "../../utils/Base_url";
import Navbar from "../../components/Header/Navbar";
import BottomHeader from "../../components/Header/BottomHeader";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    axios
      .post(`${Base_url}/getAllProducts`)
      .then((res) => {
        console.log(res);

        setAllProduct(res.data, "all products");
      })
      .catch((error) => {});
  }, []);


  const prod = [
    {
      id:1,
      name:'product '
    }
  ]

  return (
    <div>
      <Navbar/>
      <BottomHeader/>
      <HomeBanner />
      <div className=" container mx-auto pb-10">
        <Category />
        <div className=" flex  px-4 items-center justify-between">
          <h4 className=" font-medium text-2xl text-black">New Arrivals</h4>
          <span className="  text-sm text-blue-600">Shop all New Arrivals</span>
        </div>
        <div className=" flex  items-center"></div>
      </div>

      <Featureds />
      <PopularBrands />

      <ShopBanner />
      <Footer />
    </div>
  );
};

export default Home;
