import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 80000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div>
              <div>
                <div className="absolute grid grid-cols-3 min-h-[100vh] border border-red-500 overflow-hidden">
                  <div className="col-span-2 flex items-center justify-center w-[90%] mx-auto border overflow-hidden">
                    <div>
                      <p></p>
                      <p className=" text-white font-semibold text-xs sm:text-sm lg:text-base   mx-auto w-[60%]">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1"></div>
                </div>

                <img className="rounded-2xl" src={item?.image_url} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
