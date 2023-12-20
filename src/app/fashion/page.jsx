// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Counter } from "../../components/CounterMotion";

// import AOEBanner from "./images/aoebanner.png";
import { cn } from "../../lib/utils";
// import Video from "./video/video.mp4";
import animImg from "./images/anim.jpeg";

import ApproachCard1Img from "./images/slide1.jpg";
// import ApproachCard2Img from "./images/slide2.jpg";
import ApproachCard3Img from "./images/slide3.jpg";
import OutwearImg from "./images/slide4.jpg";
import ShirtsImg from "./images/slide5.jpg";

import AoeBanner from "./images/shirts.jpeg";

// import Collage1 from "./images/collage1.jpg";
// import Collage2 from "./images/collage2.jpg";
// import Collage3 from "./images/collage3.jpg";
// import Collage4 from "./images/collage4.jpg";

import s1 from "./images/snap1.jpeg";
// import s2 from "./images/snap2.jpeg";
import s3 from "./images/snap3.jpeg";
// import s4 from "./images/snap44.jpeg";
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
        capacity: "Capacity - 350K",
      },
      {
        img: ApproachCard3Img,
        data: "Footwear",
        capacity: "Capacity - 800K",
      },
      {
        img: ShirtsImg,
        data: "Shirts",
        capacity: "Capacity - 700K",
      },
      {
        img: OutwearImg,
        data: "Outwear",
        capacity: "Capacity - 600K",
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

    brands: [
      "https://utfs.io/f/c35e3b94-8c74-4a6b-b860-21d3935e273b-5z4gmw.png",
      "https://utfs.io/f/705bdf2b-072b-46e8-9fa3-61594487a1f8-ruhu8d.png",
      "https://utfs.io/f/1b5225c3-e113-40da-b9f6-2f1864473955-ruhu8a.png",
      "https://utfs.io/f/44998947-5c0d-44fa-b9c4-3ed8997161e1-ruhu89.png",
      "https://utfs.io/f/d7985f61-ace8-44db-b1fd-cf7e40f109b6-ruhu8g.png",
      "https://utfs.io/f/20cc0e72-3a1e-4bfd-8be1-53502d33a796-5z4gmq.png",
      "https://utfs.io/f/f3b4de39-4ddc-4b04-b92d-f545572c08c6-5z4gmr.png",
      "https://utfs.io/f/33d4d8e0-eb57-471f-86e7-9c7b4064cd72-5z4gmx.png",
      "https://utfs.io/f/9202cd8c-235d-4aeb-87a3-058dfcbe5df0-ruhu8e.png",
      "https://utfs.io/f/1f848cce-c39e-46b1-814b-88ab92679134-ruhu8c.png",
      "https://utfs.io/f/2468308e-698f-42d2-b770-95a6bb85f8a7-5z4gmt.png",
      "https://utfs.io/f/bb362d8e-f066-475d-8be6-d603a560de27-ruhu8f.png",
      "https://utfs.io/f/1e9399dd-5f47-44eb-90ee-1426fd0ea96a-5z4gmp.png",
      "https://utfs.io/f/7a8e8788-dbc4-413a-ab1f-262641df2c82-5z4gmu.png",
      "https://utfs.io/f/c499d60a-83e2-4ff4-a6c4-566d15e23234-ruhu8b.png",
      "https://utfs.io/f/ac6c89e9-3f32-4d96-8756-2109cbfbcddf-5z4gms.png",
      "https://utfs.io/f/612ae35d-f16c-4119-9b02-0e1eb8ae3e02-ruhu8h.png",
      "https://utfs.io/f/417e8ab3-264d-44ee-b762-686f85262b79-5z4gmv.png",
    ],

    // snapshot data
    snapshotImg1: s1,
    snapshotImg2:
      "https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snapshotImg3: s3,
    snapshotImg4:
      "https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snapshotImg5: s5,

    // interact data
    interactTitle: "",
    interactDescription: "",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* HeroSection */}
        <div className="col-12 p-0 lg:h-screen relative">
          <div className="img h-full relative">
            <img src={animImg} alt="" className="max-h-full w-full" />
          </div>

          <div className="absolute inset-0 top-0 left-0 w-full h-full z-[1]">
            <div className="w-1/2 ml-auto h-full backdrop-blur-xl text-white px-3 md:p-16 flex flex-col gap-16 justify-evenly">
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-base lg:text-3xl">
                  Apollo Fashion
                </h4>
                <div className="h-1 w-10 bg-white" />
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="text-white text-3xl lg:text-6xl font-semibold">
                  Fashion Made Responsibly
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div className="bg-[#e3e3e3] py-20">
          <div className="container flex flex-col gap-10 lg:gap-20 lg:flex-row justify-center">
            <div className="flex flex-col gap-8">
              <div className="border-2 border-black p-10 border-dashed rounded-br-[60px] transition duration-[580ms] hover:rounded-br-[30px] hover:[box-shadow:10px_10px_#191919]">
                <h1 className="text-3xl md:text-6xl font-bold">
                  {fashionData?.secondSectionTitle1}
                </h1>

                <p className="text-lg md:text-2xl">
                  {fashionData?.secondSectionSubtitle1}
                </p>
              </div>
              <div className="border-2 border-black p-10 border-dashed rounded-br-[60px] transition duration-[580ms] hover:rounded-br-[30px] hover:[box-shadow:10px_10px_#191919]">
                <h1 className="text-3xl md:text-6xl font-bold">
                  {fashionData?.secondSectionTitle2}
                </h1>

                <p className="text-lg md:text-2xl">
                  {fashionData?.secondSectionSubtitle2}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="border-2 border-black p-3 lg:p-10 border-dashed rounded-bl-[60px] transition duration-[580ms] hover:rounded-br-[30px] hover:[box-shadow:10px_10px_#191919]">
                <p className="text-lg lg:text-2xl">
                  {fashionData?.secondSectionDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OurApproach */}
        <div className="col-12 mt-4 !py-10 md:!py-20">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4 text-3xl lg:text-6xl font-bold">
                Our Priorities
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

                          <p className="text-center text-lg font-semibold">
                            {item?.capacity}
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
                      <div className="col-lg-12">
                        <h1 className="capitalize text-3xl lg:text-6xl font-bold">
                          {fashionData?.aoeTitle}
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-lg-12 text-lg lg:text-xl">
                            {fashionData?.aoeDescription}
                          </div>
                          <div className="col-lg-9">
                            <div className="row mt-2">
                              <div
                                className="col md:col-4 flex items-center"
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
                                className="col md:col-4 flex flex-row items-center gap-1"
                                style={{ fontWeight: "bold", fontSize: "30px" }}
                              >
                                <Counter
                                  from={0}
                                  to={fashionData?.aoeTag2Count}
                                />
                                +
                              </div>
                              <div
                                className="col md:col-4"
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

        {/* Forge Connection */}
        <div className="col-12 md:!my-10 py-20 space-y-4">
          <div className="row ml-lg-4">
            <div className="col-lg-9">
              <p className="text-3xl lg:text-6xl font-bold">Capabilities</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-4">
            {fashionData?.forgesData?.map((items, index) => (
              <ForgeCard key={index} data={items} />
            ))}
          </div>
        </div>
        {/* Preferred Choice */}
        <div className="col-12 md:my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 my-2">
                <h1 className="d-flex justify-content-center text-3xl md:text-6xl font-bold text-center">
                  {fashionData?.preferChoiceDataHeading}
                </h1>
              </div>
              <div className="col-lg-7 mb-6 text-base md:text-lg text-center">
                {fashionData?.preferChoiceDataDescription}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 !p-0">
                {fashionData?.brands?.map((brand) => {
                  return (
                    <div
                      key={brand}
                      className="border w-full h-40 border-blue-500 shadow-md relative p-3 transition hover:shadow-2xl duration-300"
                    >
                      <img
                        src={brand}
                        alt=""
                        className="object-cover max-w-full h-full mix-blend-multiply"
                      />
                    </div>
                  );
                })}
                {/* <div className="relative w-full">
                  <img src={Collage4} alt="" className="object-cover " />
                </div> */}
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
                    <img
                      src={fashionData?.snapshotImg1}
                      alt=""
                      className="min-h-full"
                    />
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
                  <img
                    src={fashionData?.snapshotImg3}
                    alt=""
                    className="min-h-full"
                  />
                </div>
                <div className="col-12 mt-3">
                  <img src={fashionData?.snapshotImg5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interact */}
        {/* LastSection */}
        <div className="col-12 mb-5 mt-3">
          <div className="container">
            <div className="row !justify-center">
              <div className="col-12 mt-5">
                <div className="text-center text-3xl md:text-6xl font-bold">
                  Experience Apollo Fashion
                </div>
                <div className="row">
                  <div className="col-lg-6 mx-auto text-center md:text-lg">
                    When you choose Apollo Fashion, you opt for a legacy-rich,
                    globally connected partner that prioritizes your success.
                    Discover the difference of responsible fashion manufacturing
                    with Apollo, where excellence is not just a choice – it's
                    the standard.
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="row justify-center flex-col md:flex-row gap-3">
                      <div className="col md:col-4 flex flex-col items-center">
                        <p
                          style={{ fontWeight: "bold" }}
                          className="text-center text-xl"
                        >
                          Address
                        </p>
                        <p style={{ fontWeight: "bold" }}>Footwear Division</p>
                        <p>C-30, Sector-58, NOIDA-201301, India</p>

                        <p className="md:hidden" style={{ fontWeight: "bold" }}>
                          Leather Garments & Accessories
                        </p>
                        <p className="md:hidden">
                          B-21, Sector-65, NOIDA-201301, India
                        </p>
                      </div>
                      <div className="col md:col-4 flex flex-col items-center">
                        <p style={{ fontWeight: "bold" }} className="text-xl">Phone</p>
                        <p>+91 120 4635800</p>
                        <p className="md:hidden">+91 120 4635800</p>
                      </div>
                      <div className="col md:col-4 flex flex-col items-center">
                        <p style={{ fontWeight: "bold" }} className="text-xl">Email</p>
                        info@apollofashioncompany.com
                      </div>
                    </div>

                    <div className="row justify-center hidden md:flex">
                      <div className="col-4 flex flex-col items-center">
                        <p style={{ fontWeight: "bold" }}>
                          Leather Garments & Accessories
                        </p>
                        <p>B-21, Sector-65, NOIDA-201301, India</p>
                      </div>
                      <div className="col-4 flex flex-col items-center">
                        <p>+91 120 4635800</p>
                      </div>
                      <div className="col-4 flex flex-col items-center"></div>
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
