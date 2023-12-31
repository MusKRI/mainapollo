// **** Library Imports ****
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as ReactDOMServer from "react-dom/server";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./business.css";
// import * as Tabs from "@radix-ui/react-tabs";

// **** Local Imports ****
import SectionHeading from "../SectionHeading";

const Business = ({ mainData, slides }) => {
  const MotionLink = motion(Link);

  const gradients = {
    "Apollo Green Energy": "apollo-gradient-greenenergy",
    "Apllo Supply Chain": "apollo-gradient-supplychain",
    "Apollo Fashion": "apollo-gradient-fashion",
    "Apollo ProX": "apollo-gradient-prox",
    "Apollo Marketplace": "apollo-gradient-marketplace",
  };

  return (
    <section className="relative px-3 md:px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-6">
        <div className="flex flex-col gap-4 items-center">
          <SectionHeading classes="font-bold text-center">
            {mainData.mainHeading ??
              "One Group. Diversified Business Interests"}
          </SectionHeading>

          {/* <p className="text-body-text text-center">{mainData.subHeading}</p> */}
        </div>

        <div className="px-6 relative business-hash">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            navigation={true}
            className="py-10"
            pagination={{
              dynamicBullets: true,
              clickable: true,
              renderCustom: function () {
                return ReactDOMServer.renderToStaticMarkup(
                  <div className="border p-2 rounded-sm"></div>
                );
              },
            }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <div className="relative rounded-lg w-full h-[500px] group">
                    <div className="h-full relative max-w-full rounded-lg z-[5]">
                      <img
                        src={slide.backgroundImage}
                        className="max-w-full min-w-0 object-cover h-full rounded-lg"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-black/[0.16] flex items-end z-10">
                      <div className="absolute top-4 left-4 rounded-[10px_0] bg-white px-3 py-[3px]">
                        {slide.cardHeading}
                      </div>

                      <div className="text-white px-6 py-4 flex flex-col gap-3">
                        {/* <h1 className="text-4xl font-semibold transition">
                            {slide.cardHeading}
                          </h1> */}
                        <p className="transition">{slide.cardContent}</p>

                        <MotionLink
                          to="https://apollosupplychain.com"
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <span className="text-lg">Know more</span>
                          <span className="p-2 rounded-full bg-[#191919]">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </MotionLink>
                      </div>
                    </div>

                    <div
                      className={`absolute rounded-lg inset-0 z-[-1] group-hover:z-[7] transition duration-200 ${
                        gradients[slide?.cardHeading]
                      }`}
                    ></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Business;
