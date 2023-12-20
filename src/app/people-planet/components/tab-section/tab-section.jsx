// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const TabSection = ({ data }) => {
  return (
    <div className="relative bg-[#191919] px-10 py-4 lg:py-0 text-white">
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="max-w-4xl"
      >
        {data?.map((slide) => {
          return (
            <SwiperSlide key={slide?.id}>
              <div className="flex flex-col lg:flex-row gap-7">
                <div className="flex flex-col gap-3">
                  <div className="relative w-96">
                    <img
                      src={slide?.image}
                      alt=""
                      className="rounded-md w-full h-full"
                    />
                  </div>
                </div>

                <div className="w-full p-8 flex flex-col gap-5">
                  <h3 className="text-3xl lg:text-4xl text-center">
                    {slide?.name}
                  </h3>

                  <div className="flex flex-col gap-3">
                    <p className="text-lg">{slide?.subheading1}</p>
                    <p className="text-lg">{slide?.subheading2}</p>
                    {/* <p className="text-lg">{slide?.subheading3}</p> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TabSection;
