// **** Library Imports *****
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { cn } from "../../../../lib/utils";

// const purposeValues = [
//   {
//     id: "1",
//     pv: "A premier global business conglomerate Incorporated in 1994",
//   },
//   {
//     id: "2",
//     pv: "Leading businesses trust us for our unmatched business experties and ethics",
//   },
//   {
//     id: "3",
//     pv: "Commited to innovation-led, exponential growth",
//   },
//   {
//     id: "4",
//     pv: "Anchored by an extraordinary force of over 17,500 employees",
//   },
//   {
//     id: "5",
//     pv: "Products and services making an impact in over 45 countries",
//   },
//   {
//     id: "6",
//     pv: "Our businesses have grown into global powerhouses in a wide range of sectors",
//   },
// ];

const pvVariants = {
  hidden: {
    left: -100,
    right: 0,
    top: 0,
    opacity: 0,
  },
  onHover: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
  },
};

const PurposeValues = ({ data }) => {
  const [porv, setPorv] = useState({
    btn: "purpose",
    title: "Our Purpose: Reason of our Existence",
    desc: "To deliver superior value to our customers, shareholders, employees, and community through a diversified global portfolio of emergent businesses that are driven by limitless innovation, collective wisdom, and ingenious models.",
  });

  return (
    <section className="relative px-3 md:px-5 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between py-16 md:py-32">
        <div className="flex flex-col gap-7">
          {/* <h2 className="text-2xl text-body-text">{data?.subtitle}</h2> */}
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
            {data?.title}
          </motion.h1>

          <h2 className="text-xl font-semibold -mb-6">{porv?.title}</h2>
          <motion.p
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
            className="text-body-text w-96 text-lg"
          >
            {porv?.desc}
          </motion.p>

          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            className="flex flex-row gap-4"
          >
            <div
              className={cn(
                "p-2 flex flex-row items-center gap-3 rounded-md shadow-lg text-xl font-semibold cursor-pointer",
                porv.btn === "purpose"
                  ? "border-l-4 border-orange-500"
                  : "bg-white"
              )}
              onClick={() =>
                setPorv({
                  btn: "purpose",
                  title: "Our Purpose: Reason of our Existence",
                  desc: "To deliver superior value to our customers, shareholders, employees, and community through a diversified global portfolio of emergent businesses that are driven by limitless innovation, collective wisdom, and ingenious models.",
                })
              }
            >
              Purpose
            </div>
            <div
              className={cn(
                "p-2 flex flex-row items-center gap-3 rounded-md shadow-lg text-xl font-semibold cursor-pointer",
                porv.btn === "values"
                  ? "border-l-4 border-orange-500"
                  : "bg-white"
              )}
              onClick={() => {
                setPorv({
                  btn: "values",
                  title: "Our Values: Heartbeat Of Our Existence",
                  desc: "Our values continue to direct the growth of businesses under Apollo Green Energy Limited.",
                });
              }}
            >
              Values
            </div>
          </motion.div>
        </div>

        <div className="flex-1">
          <div className="ml-auto flex flex-col">
            <div className="relative">
              {data?.nodes?.map((purposeValue) => {
                return (
                  <motion.div
                    initial="hidden"
                    whileHover="onHover"
                    key={purposeValue.id}
                    className="flex flex-row items-center justify-between p-4 relative first:border-t-2 border-b-2"
                  >
                    <motion.div
                      variants={pvVariants}
                      className="absolute bg-white"
                    ></motion.div>
                    <p className="text-xl basis-4/5 relative z-[2]">
                      {purposeValue.pv}
                    </p>

                    <div className="border w-12 h-12 flex items-center justify-center rounded-full relative z-[2]">
                      <ArrowRight className="w-6 h-6 text-body-text" />
                    </div>
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

export default PurposeValues;
