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
import animImg from "./images/anim.jpeg";

import ApproachCard1Img from "./images/slide1.jpg";
import ApproachCard2Img from "./images/slide2.jpg";
import ApproachCard3Img from "./images/slide3.jpg";
import OutwearImg from "./images/slide4.jpg";
import ShirtsImg from "./images/slide5.jpg";

import AoeBanner from "./images/shirts.jpeg";

import Collage1 from "./images/collage1.jpg";
import Collage2 from "./images/collage2.jpg";
import Collage3 from "./images/collage3.jpg";
import Collage4 from "./images/collage4.jpg";

import s1 from "./images/snap1.jpeg";
import s2 from "./images/snap2.jpeg";
import s3 from "./images/snap3.jpeg";
import s4 from "./images/snap44.jpeg";
import s5 from "./images/snap5.jpeg";
import ForgeCard from "./components/forge-card/forge-card";

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
    aoeTag3Title: "Clients Worldwide",
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
          "Passionate about advancing fashion design and innovation, our dedicated team strives for the highest quality in products, embodying our commitment to creativity, sustainability, and customer satisfaction.",
      },
      {
        Heading: "Design Expertise",
        Content:
          "Home to a team of 1500+ talented individuals, Apollo Fashion thrives on exceptional creativity and a profound understanding of customer needs. Through rigorous research, we consistently deliver designs that not only meet but exceed expectations.",
      },
      {
        Heading: "Smarter Production",
        Content:
          "With a robust manufacturing foundation, Apollo Fashion takes pride in producing superior goods at competitive prices. Committed to ethical practices and excellence, our unwavering dedication ensures consistent delivery of exceptional products.",
      },
      {
        Heading: "Flexible Order Size",
        Content:
          "Apollo Fashion offers flexible order size options to their customers by leveraging their robust supply chain network and manufacturing capabilities, allowing them to accommodate both small and large orders with ease.",
      },
      {
        Heading: "Quality Compliance",
        Content:
          "Certified by prestigious national and international organizations, our procedures uphold industry-standard benchmarks. Rigorous testing, inspections, and final product checks guarantee exceptional quality compliance, earning us recognition for excellence.",
      },
      {
        Heading: "Tech-enabled Operations",
        Content:
          "Leveraging the latest digital solutions, we optimize every aspect of our operations, ensuring high-quality and efficient processes. Our investment in digital innovation keeps us ahead of the competition, delivering unparalleled value to customers. ",
      },
      {
        Heading: "Timely Delivery",
        Content:
          "Efficient supply chain management, close monitoring of production timelines, and clear communication ensure timely delivery to our customers.",
      },
      {
        Heading: "Global Sourcing",
        Content:
          "Through strategic partnerships worldwide, meticulous quality control, and adherence to ethical and sustainable sourcing practices, Apollo Fashion ensures global sourcing.",
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
        <div className="col-12 p-0 h-screen relative">
          <div className="img h-full relative">
            <img src={animImg} alt="" className="max-h-full w-full" />
          </div>

          <div className="absolute inset-0 top-0 left-0 w-full h-full z-[1] backdrop-brightness-[0.5] px-3 md:px-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16 h-full justify-between">
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-2xl">Apollo Fashion</h4>
                <div className="h-1 w-10 bg-white" />
              </div>

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
        {/* 2nd Section */}
        <div className="col-12 bg-[#e3e3e3] py-20">
          <div className="container">
            <div className="row max-w-[1024px] mx-auto">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-12" style={{ fontWeight: "bold" }}>
                    <span className="after:absolute after:right-[-25px] after:w-3 after:h-3 after:bottom-2 after:border-main-text after:rounded-full after:bg-[#a6ca00] relative text-4xl lg:text-6xl">
                      {fashionData?.secondSectionTitle1}
                    </span>
                  </div>
                  <div className="col-md-8">
                    {fashionData?.secondSectionSubtitle1}
                  </div>
                  <div className="col-md-12" style={{ fontWeight: "bold" }}>
                    <span className="after:absolute after:right-[-25px] after:w-3 after:h-3 after:bottom-2 after:border-main-text after:rounded-full after:bg-[#a6ca00] relative text-4xl lg:text-6xl">
                      {fashionData?.secondSectionTitle2}
                    </span>
                  </div>
                  <div className="col-md-9">
                    {fashionData?.secondSectionSubtitle2}
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3 ml-auto">
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
                                &nbsp;Mn
                              </div>
                              <div
                                className="col-4 flex flex-row items-center gap-1"
                                style={{ fontWeight: "bold", fontSize: "30px" }}
                              >
                                <Counter
                                  from={0}
                                  to={fashionData?.aoeTag2Count}
                                />
                                +
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
              <div className="col-12 mb-4 text-3xl lg:text-6xl font-bold">
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
                            className="d-flex justify-content-center mt-2 text-2xl"
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
            <div className="col-lg-9">
              <p className="pl-5 ml-5 text-3xl lg:text-6xl font-bold">
                Capabilities
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-4">
            {fashionData?.forgesData?.map((items, index) => (
              <ForgeCard key={index} data={items} />
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
              <div
                className="col-lg-7 mb-6 text-lg"
                style={{ textAlign: "center" }}
              >
                {fashionData?.preferChoiceDataDescription}
              </div>
              <div className="">
                <div className="relative w-full">
                  <img src={Collage4} alt="" className="object-cover " />
                </div>
                {/* <div className="relative w-full">
                  <img src={Collage2} alt="" className="object-cover " />
                </div>
                <div className="relative w-full">
                  <img src={Collage3} alt="" className="object-cover " />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* SnapShotSection */}
        <div className="col-12 mt-10">
          <div className="container">
            <h2 className="relative leading-snug text-3xl lg:text-6xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
              Snapshot
            </h2>
            <div className="row my-5">
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
                    Discover the difference of responsible fashion manufacturing
                    with Apollo, where excellence is not just a choice – it's
                    the standard.
                  </div>
                </div>

                <div className="row justify-center">
                  <div className="col-8">
                    <div className="row mt-4 max-w-4xl text-center mx-auto">
                      <div className="col-12">
                        <div className="row justify-center">
                          <div className="col-6">
                            <p style={{ fontWeight: "bold" }}>Address</p>
                            <p style={{ fontWeight: "bold" }}>
                              Footwear Division
                            </p>
                            <p>C-30, Sector-58, NOIDA-201301, India</p>
                          </div>
                          <div className="col-6">
                            <p style={{ fontWeight: "bold" }}>Phone</p>
                            <p>+91 120 4635800</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4">
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-6">
                                <p style={{ fontWeight: "bold" }}>
                                  Leather Garments & Accessories
                                </p>
                                <p>B-21, Sector-65, NOIDA-201301, India</p>
                              </div>

                              <div className="col-6">
                                <p>+91 120 4635800</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex col-2">
                    <div className="row items-center">
                      <div className="col-2">
                        <div className="row items-center">
                          <div className="col-4">
                            <p style={{ fontWeight: "bold" }}>Email</p>
                            <p>info@apollofashioncompany.com</p>
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
