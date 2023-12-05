// **** Library Imports *****
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

// import TransportImage from "../../images/sectors/transport.png";
import sector1img from "../../images/sectors/sector1.jpg";
import sector2img from "../../images/sectors/sector2.jpg";
import sector3img from "../../images/sectors/sector3.png";
import sector4img from "../../images/sectors/sector4.jpg";
import sector5img from "../../images/sectors/sector5.jpg";

const keySectors = [
  {
    id: "1",
    pv: "Consumer Durables & High-Tech Industries",
    image: sector1img,
  },
  {
    id: "2",
    pv: "Automotive & Industrial Sector",
    image: sector2img,
  },
  {
    id: "3",
    pv: "E-Commerce & FMCG",
    image: sector3img,
  },
  {
    id: "4",
    pv: "Healthcare & Pharmaceuticals",
    image: sector4img,
  },
  {
    id: "5",
    pv: "Lifestyle & Retail",
    image: sector5img,
  },
];

// const pvVariants = {
//   hidden: {
//     left: 0,
//     right: 0,
//     top: 0,
//     opacity: 0,
//   },
//   onHover: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     opacity: 1,
//   },
// };

const Sectors = () => {
  // const images = [
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld1.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld2.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld1.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld1.jpg",
  //   "https://apollosupplychain.com/cms/wp-content/uploads/2023/03/hm_sld3.jpg",
  // ];
  const [currentImage, setCurrentImage] = useState(keySectors[0]?.image);

  const handleCurrentImage = (index) => {
    setCurrentImage(keySectors[index]?.image);
  };

  return (
    <section className="relative px-3 md:px-5 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between pt-16 md:pt-32">
        <div className="flex flex-col gap-7" style={{ width: "50%" }}>
          <motion.h2
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            className="text-2xl text-body-text"
          >
            Sectors
          </motion.h2>
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            className="text-4xl lg:text-6xl text-main-text"
          >
            Key Sectors We Serve
          </motion.h1>

          <motion.div
            key={`${currentImage}`}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            className="aspect-square relative"
          >
            <img
              alt="Transport"
              src={currentImage}
              className="mix-blend-multiply rounded-lg"
              style={{ maxWidth: "90%" }}
            />
          </motion.div>
        </div>

        <div className="flex-1">
          <div className="lg:max-w-[100%] ml-auto flex flex-col">
            <div className="pb-10">
              <motion.h3
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="text-body-text text-lg"
              >
                Apollo Supply Chain serve a diverse range of key sectors:
              </motion.h3>
            </div>
            <div className="relative">
              {keySectors.map((keySector, index) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileHover="onHover"
                    key={keySector.id}
                    className="flex flex-row items-center justify-between p-4 relative first:border-t-2 border-b-2 group"
                    onMouseEnter={() => handleCurrentImage(index)}
                  >
                    {/* <motion.div
                      variants={pvVariants}
                      className="absolute bg-white"
                    ></motion.div> */}
                    <motion.p
                      initial={{
                        x: 100,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="text-xl relative z-[2] text-body-text group-hover:text-main-text"
                    >
                      {index + 1 >= 10 ? index + 1 : `0${index + 1}`}{" "}
                    </motion.p>
                    <motion.p
                      initial={{
                        x: 100,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="text-xl basis-3/5 relative z-[2] text-body-text group-hover:text-main-text"
                    >
                      {keySector.pv}
                    </motion.p>

                    <motion.div
                      initial={{
                        x: 100,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full relative z-[2]"
                    >
                      <ArrowUpRight className="w-6 h-6 text-body-text group-hover:text-main-text group-hover:rotate-45 transition" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
