// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Counter } from "../../components/CounterMotion";

// import AOEBanner from "./images/aoebanner.png";
import { cn } from "../../lib/utils";
import Video from "./video/video.mp4";

import ApproachCard1Img from "./images/slide1.jpg";
import ApproachCard2Img from "./images/slide2.jpg";
import ApproachCard3Img from "./images/slide3.jpg";
import OutwearImg from "./images/slide4.jpg";
import ShirtsImg from "./images/slide5.jpg";

import AoeBanner from "./images/shirts.jpeg";

import Rec1 from "./images/rec1.png";
import Rec2 from "./images/rec2.png";
import Rec3 from "./images/rec3.png";

import s1 from "./images/snap1.jpeg";
import s2 from "./images/snap2.jpeg";
import s3 from "./images/snap3.jpeg";
import s4 from "./images/snap44.jpeg";
import s5 from "./images/snap5.jpeg";

export const Fashion = () => {
  const fashionData = {
    secondSectionTitle1: "Unmatched",
    secondSectionSubtitle1: "20+ Years of Fuelling Fashion",
    secondSectionTitle2: "Unstoppable",
    secondSectionSubtitle2: "Innovation & Product Excellence",
    secondSectionDescription:
      "Apollo Fashion is a prominent manufacturer for leading international fashion brands. Our focus lies in creating exceptional products across various industry-leading categories. Our comprehensive services include design, manufacturing, market intelligence, and delivery compliance for fashion brands in today's dynamic landscape. Our core mission is to assist our clients in delivering top-quality fashion to their customers, regardless of the platform. Our team has extensive expertise in producing a wide range of products, including outerwear, accessories, footwear, and woven apparels.",

    // AOE data
    aoeTitle: "Area Of Expertise",
    aoeDescription:
      "In the dynamic digital age of fashion, we keep pace with evolving market demands and disruptive technological innovations. Our expertise in garment, accessory, and footwear production is built on cutting-edge technology.",
    aoeTag1Count: 2.8,
    aoeTag1Title: "Production Capacity",
    aoeTag2Count: 5,
    aoeTag2Title: "Product Categories",
    aoeTag3Count: 40,
    aoeTag3Title: "Happy Clients",
    aoeBannerImage: AoeBanner,

    // approach data
    approachData: [
      {
        img: ApproachCard1Img,
        data: "Accessories",
      },
      {
        img: ApproachCard2Img,
        data: "Leather Garments",
      },
      {
        img: ApproachCard3Img,
        data: "Footwear",
      },
      {
        img: ShirtsImg,
        data: "Shirts",
      },
      {
        img: OutwearImg,
        data: "Outwear",
      },
    ],

    // forges data
    forgesData: [
      {
        Heading: "Customers First",
        Content:
          "At Apollo Fashion, we are passionate about pushing the boundaries of fashion design and innovation. Our team is dedicated to delivering the highest quality products that reflect our commitment to creativity, sustainability, and customer satisfaction.",
      },
      {
        Heading: "Design Expertise",
        Content:
          "Apollo Fashion is home to a team of over 1500 talented employees, whose exceptional creativity and deep understanding of the customers&#39; needs drive their design expertise. Through rigorous research, our team consistently delivers designs that meet and exceed customer expectations.",
      },
      {
        Heading: "Smarter Production",
        Content:
          "Apollo Fashion has a strong foundation in manufacturing and we take pride in our ability to produce superior goods at competitive prices. We maintain high standards because we are committed to ethical practices and excellence in every aspect of our production process. Our unwavering dedication allows us to consistently deliver exceptional products to our customers.",
      },
      {
        Heading: "Flexible Order Size",
        Content:
          "Apollo Fashion offers flexible order size options to their customers by leveraging their robust supply chain network and manufacturing capabilities, allowing them to accommodate both small and large orders with ease.",
      },
      {
        Heading: "Quality Compliance",
        Content:
          "We maintain quality compliance through rigorous testing of raw materials, inspections during production, and final product checks before shipment. Our procedures have been certified by prestigious national and international organizations, verifying their exceptional quality compliance and have been rewarded for establishing the industry standard benchmark.",
      },
      {
        Heading: "Tech-enabled Operations",
        Content:
          "We employ the latest digital solutions to serve our customers. By leveraging our technological expertise, we optimize every aspect of our operations, from manufacturing to customer service, to ensure the highest quality and efficiency. Our investment in digital innovation allows us to stay ahead of the competition and deliver unparalleled value to our customers. ",
      },
      {
        Heading: "Timely Delivery",
        Content:
          "We ensure timely delivery by using efficient supply chain management practices, closely monitoring production timelines, and maintaining clear communication with customers throughout the delivery process.",
      },
      {
        Heading: "Global Sourcing",
        Content:
          "Apollo Fashion ensures global sourcing through strategic partnerships with suppliers worldwide, meticulous quality control measures, and adherence to ethical and sustainable sourcing practices.",
      },
    ],

    // prefer choice data
    preferChoiceDataHeading: "Preferred Choice For Global Iconic Brands",
    preferChoiceDataDescription:
      "We have built long standing relationship with our customers. Our continued partnership with them, enables us to share their vision of evolution, growth and sustainability. During the course of our journey, we have had the opportunity of working with some great talents across internationally acclaimed brands.",

    // snapshot data
    snapshotImg1: s1,
    snapshotImg2: s2,
    snapshotImg3: s3,
    snapshotImg4: s4,
    snapshotImg5: s5,

    // interact data
    interactTitle: "",
    interactDescription: "",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* HeroSection */}
        <div className="col-12 p-0 h-screen">
          <div className="img h-full relative">
            <video
              muted
              loop="true"
              autoPlay={true}
              src={Video}
              className="object-fill h-screen w-full"
            />

            <div className="absolute inset-0 top-0 left-0 w-full h-full z-[1] backdrop-brightness-[0.5] px-3 md:px-5">
              <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16 h-full justify-center">
                {/* <div className="flex flex-col gap-3">
              <h4 className="text-white text-2xl">{data.tag}</h4>
              <div className="h-1 w-10 bg-white" />
            </div> */}

                <div className="flex flex-col gap-5">
                  <h1 className="text-white text-5xl lg:text-7xl font-semibold">
                    Fashion Made Responsibly
                  </h1>

                  {/* <p className="text-white max-w-md text-lg ml-4 lg:ml-20">
                {data.bannerDescription}
              </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div className="col-12 bg-[#e3e3e3] py-20">
          <div className="container">
            <div className="row max-w-[1024px] mx-auto">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div
                    className="col-12"
                    style={{ fontSize: "40px", fontWeight: "bold" }}
                  >
                    {fashionData?.secondSectionTitle1}
                  </div>
                  <div className="col-md-6">
                    {fashionData?.secondSectionSubtitle1}
                  </div>
                  <div
                    className="col-md-12"
                    style={{ fontSize: "40px", fontWeight: "bold" }}
                  >
                    {fashionData?.secondSectionTitle2}
                  </div>
                  <div className="col-md-6">
                    {fashionData?.secondSectionSubtitle2}
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                {fashionData?.secondSectionDescription}
              </div>
            </div>
          </div>
        </div>
        {/* Area OF expertise */}
        <div className="col-12 p-0">
          <div
            className="container-fluid p-0 text-white relative"
            // style={{
            //   backgroundImage: `url(${fashionData?.aoeBannerImage})`,
            //   lineHeight: " 1.4",
            // }}
          >
            <img
              src={fashionData?.aoeBannerImage}
              alt="About Us Banner"
              className="h-[calc(100vh)] w-full object-cover"
            />
            <div className="backdrop-brightness-50 absolute inset-0 top-0 z-[1] px-3 md:px-5">
              <div className="container h-full">
                <div className="row justify-center items-center h-full ">
                  <div className="col-10">
                    <div className="row">
                      <div className="col-lg-12 mt-5">
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "60px",
                          }}
                          className="capitalize"
                        >
                          {fashionData?.aoeTitle}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-lg-12 text-xl">
                            {fashionData?.aoeDescription}
                          </div>
                          <div className="col-lg-9">
                            <div className="row mt-2">
                              <div
                                className="col-4 flex items-center"
                                style={{ fontWeight: "bold", fontSize: "30px" }}
                              >
                                <Counter
                                  from={0}
                                  to={fashionData?.aoeTag1Count}
                                  isFixed
                                  point={1}
                                />
                                M
                              </div>
                              <div
                                className="col-4"
                                style={{ fontWeight: "bold", fontSize: "30px" }}
                              >
                                <Counter
                                  from={0}
                                  to={fashionData?.aoeTag2Count}
                                />
                              </div>
                              <div
                                className="col-4"
                                style={{ fontWeight: "bold", fontSize: "30px" }}
                              >
                                <Counter
                                  from={0}
                                  to={fashionData?.aoeTag3Count}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 mb-5">
                            <div className="row">
                              <div className="col-4">
                                {fashionData?.aoeTag1Title}
                              </div>
                              <div className="col-4">
                                {fashionData?.aoeTag2Title}
                              </div>
                              <div className="col-4">
                                {fashionData?.aoeTag3Title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OurApproach */}
        <div className="col-12 mt-4 !py-20">
          <div className="container">
            <div className="row">
              <div
                className="col-12 mb-4"
                style={{ fontWeight: "bold", fontSize: "40px" }}
              >
                A Deep-Dive Into Our Priorities
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
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
                {fashionData?.approachData?.map((item) => {
                  console.log(item.img); // Assuming 'img' property exists in each object
                  return (
                    <SwiperSlide key={item.id} className="">
                      {({ isNext, isPrev }) => (
                        <div className="relative" key={item.id}>
                          <div className="relative">
                            <img
                              src={item.img}
                              alt=""
                              className="rounded-md h-[500px] w-full"
                            />
                            <div
                              className={cn(
                                "absolute inset-0 z-[1] rounded-md",
                                isPrev && "bg-indigo-500/40",
                                isNext && "bg-red-500/40"
                              )}
                            ></div>
                          </div>
                          <p
                            className="d-flex justify-content-center mt-2"
                            style={{ fontWeight: "bold" }}
                          >
                            {item.data}
                          </p>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        {/* Forge Connection */}
        <div className="col-12 !my-10 py-20 space-y-4">
          <div className="row ml-lg-4">
            <div className="col-lg-9 ">
              <p
                style={{ fontWeight: "bold", fontSize: "40px" }}
                className="pl-5 ml-5"
              >
                Forge Connection With Excellence
              </p>
            </div>
          </div>
          <div className="row">
            {fashionData?.forgesData?.map((items, index) => (
              <div
                className={`col-md-3 card border-0 transition hover:shadow-2xl ${
                  index === 0 || index === 2 || index === 5 || index === 7
                    ? "bg-white hover:!bg-[#8a6139] hover:!text-white"
                    : "bg-[#f8f8f8] hover:!bg-[#8a6139] hover:!text-white"
                }`}
                key={items.id}
              >
                <div className={cn("border-0")}>
                  <p
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                    className="ml-3 mt-3 border-b"
                  >
                    {items.Heading}
                  </p>
                  <p className="mt-3 pl-3 pr-3">{items.Content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Preferred Choice */}
        <div className="col-12 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-12 my-2"
                style={{ fontWeight: "bold", fontSize: "50px" }}
              >
                <p className="d-flex justify-content-center text-6xl">
                  {fashionData?.preferChoiceDataHeading}
                </p>
              </div>
              <div className="col-lg-7 mb-6" style={{ textAlign: "center" }}>
                {fashionData?.preferChoiceDataDescription}
              </div>
              <div className="flex flex-row justify-center gap-6 flex-wrap items-center">
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec1} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec2} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec3} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec1} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec2} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec3} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec1} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec2} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec3} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec1} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec2} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec3} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec1} className="w-full" />
                </div>
                <div className="relative w-[150px] border shadow-sm rounded-md">
                  <img alt="img" src={Rec2} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SnapShotSection */}
        <div className="col-12">
          <div className="container">
            <p style={{ fontWeight: "bold", fontSize: "50px" }}>Snapshot</p>
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-6">
                    <img src={fashionData?.snapshotImg1} alt="" />
                  </div>
                  <div className="col-6">
                    <img src={fashionData?.snapshotImg2} alt="" />
                  </div>
                  <div className="col-12  mt-3">
                    <img
                      src={fashionData?.snapshotImg4}
                      alt=""
                      style={{ minWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12">
                  <img src={fashionData?.snapshotImg3} alt="" />
                </div>
                <div className="col-12 mt-3">
                  <img src={fashionData?.snapshotImg5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interact */}
        <div className="col-12 mb-5 mt-3">
          <div className="container">
            <div className="row justify-center">
              <div className="col-12 mt-5">
                <div
                  style={{ fontWeight: "bold", fontSize: "55px" }}
                  className="text-center"
                >
                  Experience Apollo Fashion
                </div>
                <div className="row">
                  <div className="col-lg-6 mx-auto text-justify">
                    When you choose Apollo Fashion, you opt for a legacy-rich,
                    globally connected partner that prioritizes your success.
                    Discover the difference of international trade and
                    distribution with Apollo, where excellence is not just a
                    choice – it’s the standard.
                  </div>
                </div>
                <div className="row mt-4 max-w-4xl text-center mx-auto">
                  <div className="col-12">
                    <div className="row justify-center">
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>Address</p>
                        <p style={{ fontWeight: "bold" }}>Footwear Division</p>
                        <p>C-30, Sector-58, NOIDA-201301, India</p>
                      </div>
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>Phone</p>
                        <p>+91 120 4635800</p>
                      </div>
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>Email</p>
                        <p>info@apollofashioncompany.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="row">
                      <div className="col-8">
                        <div className="row">
                          <div className="col-6">
                            <p style={{ fontWeight: "bold" }}>
                              Leather Garments & Accessories
                            </p>
                            <p>B-21, Sector-65, NOIDA-201301, India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
