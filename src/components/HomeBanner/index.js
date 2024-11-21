"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";

const HomeBanner = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Stop carousel autoplay when user scrolls down
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsAutoPlay(false);
    } else {
      setIsAutoPlay(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen bg-white">
      <Carousel
        autoPlay={isAutoPlay}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        {/* Slide 1 */}
        <div
          className="h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${slider1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="sm:px-20 px-10 w-full max-w-screen-lg">
            <div className="grid md:grid-cols-2 grid-cols-1 text-start">
              <div className="text-black">
                <span className="uppercase font-semibold text-lg">
                  New Collection
                </span>
                <h4 className="md:text-6xl text-4xl font-bold my-3 leading-snug">
                  The Gift Suite
                </h4>
                <p className="text-lg">
                  Our latest collection of essential basics.
                </p>
                <div className="mt-6">
                  <a
                    className="py-3 px-6 bg-slate-900 text-white rounded-md inline-block font-semibold"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${slider2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="sm:px-20 px-10 w-full max-w-screen-lg">
            <div className="grid md:grid-cols-2 grid-cols-1 text-start">
              <div className="text-black">
                <span className="uppercase font-semibold text-lg">
                  Christmas Sale 2023
                </span>
                <h4 className="md:text-6xl text-4xl font-bold my-3 leading-snug">
                  End of Season Sale
                </h4>
                <p className="text-lg">
                  Our latest collection of essential basics.
                </p>
                <div className="mt-6">
                  <a
                    className="py-3 px-6 bg-slate-900 text-white rounded-md inline-block font-semibold"
                    href="#"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
