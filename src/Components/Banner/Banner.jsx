// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = ({data}) => {
    return (
        <div className="z-30">
            <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className={`absolute sm:grid grid-cols-3 min-h-[60vh] overflow-hidden   hidden sm:visible`}
                  >
                    <div className="col-span-2 flex items-center justify-center   overflow-hidden">
                      <div>
                        <div>
                          <p className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-red-500 to-pink-500 font-black mx-auto w-[80%]">
                            {item?.title}
                          </p>
                          <p className=" text-white font-semibold text-xs sm:text-sm lg:text-base   mx-auto w-[80%]">
                            <p className="w-[60%]">{item?.description}</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1"></div>
                  </div>

                  <img className=" w-full" src={item?.image_url} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    );
};

export default Banner;