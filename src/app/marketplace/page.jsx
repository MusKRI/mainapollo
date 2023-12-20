import { TypeAnimation } from "react-type-animation";

import HomeMap from "./components/map/map";

import Banner from "./images/banner.jpg";

import sImg from "./images/fb.jpg";

// import Video from "./video/marketplace.mp4";
import BenefitCard from "./components/benefit-card/benefit-card";

export const MarketPlace = () => {
  let data = {
    bannerDescription: "Redefining Global Trade & Commerce",
    bannerImage: Banner,
    bgImage: sImg,

    // Apollo Green Energy Limited
    agTitle: "Your Trusted Global Partner",
    agDescription:
      "Apollo Marketplace, a key player in trading and distribution, extends its reach across 45+ countries. As part of Apollo Green Energy Limited, we prioritize upholding the highest ethical standards in all business endeavors. With a dedicated team of over 1000+ professionals, our primary goal is providing outstanding customer-centric solutions. With two decades of experience, we've established ourselves as reliable partners in the global marketplace. Explore our offerings and unlock the benefits that our rich legacy and expansive global network bring to your business.",
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
        <div className="col-12 p-0">
          <div className="img h-full relative">
            <div className="relative">
              <img
                src="https://utfs.io/f/7596dfdf-b1bc-4d1c-b3de-c253d9f51162-pymbqh.svg"
                alt=""
                className="max-w-full h-full"
              />
            </div>

            <div className="absolute inset-0 top-0 left-0 w-full h-full z-[1] backdrop-brightness-[0.5] px-3 md:px-5">
              <div className="max-w-7xl mx-auto flex flex-col py-3 md:gap-16 md:py-16 h-full justify-between">
                <div className="flex flex-col gap-1">
                  <h4 className="text-white text-lg md:text-2xl">
                    Apollo Marketplace
                  </h4>
                  <div className="h-1 w-10 bg-white" />
                </div>

                <div className="flex flex-col gap-5">
                  <h1 className="text-white text-3xl lg:text-6xl font-semibold max-w-[50%]">
                    Redefining Global Trade & Commerce
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="container mt-4 mb-4">
        <div className="row flex flex-col md:flex-row gap-2">
          <div className="col md:col-6">
            <img
              src={
                "https://images.unsplash.com/photo-1644134913825-5ff0ff4e731c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
              }
              alt=""
              style={{ maxHeight: "370px", minWidth: "70%" }}
              className="rounded-md"
            />
          </div>
          <div
            className="col md:col-6 d-flex align-items-center"
            style={{ marginBottom: "-20px" }}
          >
            <div className="row" style={{ background: "white" }}>
              <div className="col-12 d-flex justify-content-start">
                <div className="container">
                  <h1 className="text-3xl md:text-6xl font-bold">
                    {data?.agTitle}
                  </h1>
                </div>
              </div>
              <div className="col-12 mb-4" style={{ marginBottom: "-50px" }}>
                <div className="container">
                  <p className="md:text-lg">{data?.agDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="container my-4 !mt-10 py-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl lg:text-6xl font-semibold text-center">
              Apollo Marketplace is <br className="md:hidden" />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "dynamic",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "competitive",
                  1000,
                  "globally connected",
                  1000,
                  "reputable",
                  1000,
                ]}
                wrapper="span"
                speed={300}
                className="text-3xl md:text-6xl"
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-md mx-auto text-base md:text-lg text-center">
              we specialize in trading and disturbing a diverse range of
              products across several key business verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="group relative flex-1 rounded-lg bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden hover:[box-shadow:10px_10px_20px_#878787] transition duration-300 text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2] [text-shadow:2px_2px_2px_#000000]">
                Heavy Machinery & Equipment Solutions
              </div>
            </div>

            <div
              className="hover:[box-shadow:10px_10px_20px_#878787] transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2]">
                Medical and Surgical Equipment
              </div>
            </div>

            <div
              className="hover:[box-shadow:10px_10px_20px_#878787] transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://images.unsplash.com/photo-1651525670114-2b8117390b28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2]">Food Beverages</div>
            </div>

            <div
              className="hover:[box-shadow:10px_10px_20px_#878787] transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://images.unsplash.com/photo-1607718330023-64d147bac374?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2]">Consumer Goods</div>
            </div>

            <div
              className="hover:[box-shadow:10px_10px_20px_#878787] transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://plus.unsplash.com/premium_photo-1661962775412-b0740d74b7fa?q=80&w=1869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2]">
                Agriculture Tools & Machinery
              </div>
            </div>

            <div
              className="hover:[box-shadow:10px_10px_20px_#878787] transition group relative flex-1 rounded-md bg-[#1c1e22] flex flex-col justify-end gap-2 p-4 h-56 overflow-hidden text-white hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent), url(https://plus.unsplash.com/premium_photo-1682146920372-bd950e25125d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
              }}
            >
              <div className="text-xl relative z-[2]">Electrical Products</div>
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
              <h1
                className="text-center text-3xl md:text-6xl font-bold"
              >
                Experience Apollo Marketplace
              </h1>
              <div className="row">
                <div className="col-lg-6 mx-auto text-center md:text-lg">
                  When you choose Apollo Marketplace, you opt for a legacy-rich,
                  globally connected partner that prioritizes your success.
                  Discover the difference of international trade and
                  distribution with Apollo, where excellence is not just a
                  choice – it's the standard.
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row justify-center flex-col md:flex-row gap-2">
                    <div className="col md:col-4 flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }} className="text-center">
                        Address
                      </p>
                      <p className="text-center">
                        Apollo Towers, Plot No 20, Sector 44, Gurgaon-122002,
                        Haryana, India
                      </p>
                    </div>
                    <div className="col md:col-4 flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Phone</p>
                      <p>(91-124) 6740100</p>
                      <p>(91-124) 6740200</p>
                    </div>
                    <div className="col md:col-4 flex flex-col items-center">
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
