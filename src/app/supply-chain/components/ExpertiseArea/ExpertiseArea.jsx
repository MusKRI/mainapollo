// **** Library Imports ****
import * as ReactDOMServer from "react-dom/server";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// **** Local Imports ****

import SectionHeading from "../../../components/SectionHeading";

import slide1Img from "../../images/sc-business/slide1.png";
import slide2Img from "../../images/sc-business/slide2.jpeg";
import slide3Img from "../../images/sc-business/slide3.jpeg";
import slide4Img from "../../images/sc-business/slide4.jpeg";
import slide5Img from "../../images/sc-business/slide5.jpeg";
import slide6Img from "../../images/sc-business/slide6.jpeg";
import slide7Img from "../../images/sc-business/slide7.jpeg";
import slide8Img from "../../images/sc-business/slide8.jpeg";

const slideNodes = [
  {
    id: "1",
    slideImage: slide1Img,
    slideTitle: "Warehousing",
  },
  {
    id: "2",
    slideImage: slide2Img,
    slideTitle: "In-plant Warehousing",
  },
  {
    id: "3",
    slideImage: slide3Img,
    slideTitle: "Surface Transport",
  },
  {
    id: "4",
    slideImage: slide4Img,
    slideTitle: "Ocean Freight",
  },
  {
    id: "5",
    slideImage: slide5Img,
    slideTitle: "Air Freight",
  },
  {
    id: "6",
    slideImage: slide6Img,
    slideTitle: "CFS (Container Freight Station)",
  },
  {
    id: "7",
    slideImage: slide7Img,
    slideTitle: "Network Design & Consulting",
  },
  {
    id: "8",
    slideImage: slide8Img,
    slideTitle: "Control Tower & Analytics Center",
  },
];

const ExpertiseArea = () => {
  return (
    <section className="relative px-3 md:px-5 ExpertiseArea">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32 gap-10">
        <div className="flex flex-col gap-4 items-center">
          <SectionHeading classes="text-center mt-2 text-[#ff7900]">
            Areas of Expertise
          </SectionHeading>

          <p className="text-body-text text-center max-w-lg text-lg">
            Apollo Supply Chain&apos;s customized integrated solutions for
            supply chain competitiveness and resilience include:
          </p>
        </div>

        <div className="hash min-h-[250px] md:min-h-[450px] flex items-center mb-40 md:mb-0 overflow-x-clip">
          <Swiper
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            className="py-10"
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderCustom: function () {
                return ReactDOMServer.renderToStaticMarkup(
                  <div className="border p-2 rounded-sm"></div>
                );
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {slideNodes?.map((slide) => {
              return (
                <SwiperSlide key={slide.id} className="h-full self-stretch">
                  <div className="flex flex-col gap-3 h-full items-center justify-stretch group">
                    <div className="relative border-2 border-[#ff7900] rounded-lg p-4 flex flex-col gap-4 group-hover:bg-[#ff7900] transition">
                      <img
                        src={slide.slideImage}
                        alt="IMG1"
                        className="rounded-lg -mt-12 h-[300px]"
                      />
                      <h4 className="text-xl text-center">
                        {slide.slideTitle}
                      </h4>
                    </div>
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

export default ExpertiseArea;
