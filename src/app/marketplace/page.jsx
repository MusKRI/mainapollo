import HomeMap from "./components/map/map";

import Banner from "./images/banner.jpg";

import icon1 from "./images/icons/heavy-machinery-equipment-solutions.svg";
import icon2 from "./images/icons/medical-and-surgical-equipment.svg";
import icon3 from "./images/icons/food-and-beverages.svg";
import icon4 from "./images/icons/consumer-goods.svg";
import icon5 from "./images/icons/agriculture-tools-and-machinery.svg";
import icon6 from "./images/icons/electrical-products.svg";

import sImg from "./images/fb.jpg";

import Video from "./video/marketplace.mp4";
import BenefitCard from "./components/benefit-card/benefit-card";

export const MarketPlace = () => {
  let data = {
    bannerDescription: "Redefining Global Trade & Commerce",
    bannerImage: Banner,
    bgImage: sImg,

    // Apollo Green Energy Limited
    agTitle: "Apollo Marketplace",
    agDescription:
      "is a trading and distribution company with a widespread presence across over 45 countries. As a part of the esteemed business conglomerate, the Apollo Green Energy Limited, we are deeply committed to upholding the highest standards of ethics in all our business endeavors. With a dedicated team of over 1000+ employees, our core focus revolves around providing exceptional customer-centric solutions. With over three decades of experience, we have established ourselves as trusted partners in the global marketplace. Explore our offerings and discover how our rich legacy and global network can benefit your business.",
    agImage: "",

    // Benefits from our unmatched expertise section
    benefitsData: [
      {
        id: "1",
        heading: "Global Network and Partnerships",
        desc: "Our extensive global network and strategic partnerships enable us to connect buyers and sellers from around the world, facilitating seamless trade operations.",
      },
      {
        id: "2",
        heading: "Holistic Solutions",
        desc: "Apollo Marketplace functions as a holistic trading partner, presenting a diverse product portfolio spanning multiple industries.",
      },
      {
        id: "3",
        heading: "Quality Commitment",
        desc: "We uphold the highest standards of quality assurance, ensuring that every product or service we provide exceeds your expectations.",
      },
      {
        id: "4",
        heading: "Customized Collaborations",
        desc: "Acknowledging the distinctiveness of every business, we prioritize personalized partnerships that align with your specific needs and objectives.",
      },
      {
        id: "5",
        heading: "Innovation-Centric",
        desc: "In an ever-evolving business landscape, we embrace innovation to remain at the forefront, delivering cutting-edge solutions to our clients.",
      },
    ],
  };

  return (
    <>
      <div className="relative">
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
              <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16 h-full justify-between">
                <div className="flex flex-col gap-3">
                  <h4 className="text-white text-2xl">Apollo Marketplace</h4>
                  <div className="h-1 w-10 bg-white" />
                </div>

                <div className="flex flex-col gap-5">
                  <h1 className="text-white text-5xl lg:text-7xl font-semibold max-w-[50%]">
                    Redefining Global Trade & Commerce
                  </h1>

                  {/* <p className="text-white max-w-md text-lg ml-4 lg:ml-20">
                {data.bannerDescription}
              </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-6">
            <img
              src={data.bgImage}
              alt=""
              style={{ maxHeight: "370px", minWidth: "70%" }}
            />
          </div>
          <div
            className="col-6 d-flex align-items-end"
            style={{ marginBottom: "-20px" }}
          >
            <div
              className="row"
              style={{ marginLeft: "-450px", background: "white" }}
            >
              <div className="col-12 mt-4 d-flex justify-content-start">
                <div className="container">
                  <h1 style={{ fontWeight: "750", fontSize: "25px" }}>
                    {data?.agTitle}
                  </h1>
                </div>
              </div>
              <div className="col-8 mb-4" style={{ marginBottom: "-50px" }}>
                <div className="container">
                  <p>{data?.agDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="container my-4 py-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl lg:text-6xl font-semibold text-center">
              At Apollo Marketplace
            </h1>
            <p className="max-w-md mx-auto text-lg text-center">
              we specialize in trading and disturbing a diverse range of
              products across several key business verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden hover:shadow-md transition text-white">
              <div className="relative z-[2]">
                <img src={icon1} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">
                Heavy Machinery & Equipment Solutions
              </div>

              <div className="absolute z-[0] right-[-150px] bottom-[-100px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon1} alt="" className="" />
              </div>
            </div>

            <div className="hover:shadow-md transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white">
              <div className="relative z-[2]">
                <img src={icon2} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">
                Medical and Surgical Equipment
              </div>

              <div className="absolute z-[0] right-[-150px] bottom-[-10px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon2} alt="" className="" />
              </div>
            </div>

            <div className="hover:shadow-md transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white">
              <div className="relative z-[2]">
                <img src={icon3} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">Food Beverages</div>

              <div className="absolute z-[0] right-[-150px] bottom-[-100px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon3} alt="" className="" />
              </div>
            </div>

            <div className="hover:shadow-md transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white">
              <div className="relative z-[2]">
                <img src={icon4} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">Consumer Goods</div>

              <div className="absolute z-[0] right-[-150px] bottom-[-100px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon4} alt="" className="" />
              </div>
            </div>

            <div className="hover:shadow-md transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white">
              <div className="relative z-[2]">
                <img src={icon5} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">
                Agriculture Tools & Machinery
              </div>

              <div className="absolute z-[0] right-[-150px] bottom-[-100px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon5} alt="" className="" />
              </div>
            </div>

            <div className="hover:shadow-md transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white">
              <div className="relative z-[2]">
                <img src={icon6} alt="" className="h-20" />
              </div>
              <div className="text-xl relative z-[2]">Electrical Products</div>

              <div className="absolute z-[0] right-[-150px] bottom-[-100px] w-full opacity-30 group-hover:scale-125 transition-all">
                <img src={icon6} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border-t max-w-lg mx-auto"></div> */}

      {/* Map */}
      <HomeMap />
      {/* BenefitSections */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Benefit from our unmatched expertise
            </h1>

            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:[&>div]:w-[200px] content-center gap-3 mt-6 justify-center">
              {data?.benefitsData?.map((ben, index) => {
                return <BenefitCard key={index} data={ben} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* LastSection */}
      <div className="col-12 mb-5 mt-3">
        <div className="container">
          <div className="row !justify-center">
            <div className="col-12 mt-5">
              <div
                style={{ fontWeight: "bold", fontSize: "55px" }}
                className="text-center"
              >
                Experience Apollo Marketplace
              </div>
              <div className="row">
                <div className="col-lg-6 mx-auto text-center">
                  When you choose Apollo Marketplace, you opt for a legacy-rich,
                  globally connected partner that prioritizes your success.
                  Discover the difference of international trade and
                  distribution with Apollo, where excellence is not just a
                  choice – it's the standard.
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row justify-center">
                    <div className="col-4 flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }} className="text-center">
                        Address
                      </p>
                      <p className="text-center">
                        Apollo Towers, Plot No 20, Sector 44, Gurgaon-122002,
                        Haryana, India
                      </p>
                    </div>
                    <div className="col-4 flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Phone</p>
                      <p>(91-124) 6740100</p>
                      <p>(91-124) 6740200</p>
                    </div>
                    <div className="col-4 flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Email</p>
                      <p>info@apolloindia.com</p>
                      <p>contact@apolloindia.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
