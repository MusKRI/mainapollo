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
    <section className="relative bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto flex flex-col py-16 px-6">
        {/* Purpose */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#2e3192] text-6xl font-semibold text-center">Purpose</h1>
            <p className="text-3xl font-semibold text-center">Reason of our Existence</p>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-[1.8]">
              To deliver superior value to our customers, shareholders,
              employees, and community through a diversified global portfolio of
              emergent businesses that are driven by limitless innovation,
              collective wisdom, and ingenious models.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-[#2e3192] max-w-xl mx-auto w-full my-8" />

        {/* Values */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#2e3192] text-6xl font-semibold text-center">Values</h1>
            <p className="text-3xl font-semibold text-center">Heartbeat Of Our Existence</p>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-[1.8]">
              Our values continue to direct the growth of businesses under
              Apollo Green Energy Limited.
            </p>
          </div>
        </div>
      </div>

      {/* The Force of Five */}
      <div className="bg-[#2e3192] text-white p-4">
        <h1 className="text-3xl lg:text-6xl font-bold text-center my-6">
          The Force of Five
        </h1>

        <div className="grid grid-cols-1 max-w-[500px] md:max-w-full md:grid-cols-2 lg:grid-cols-5">
          {data?.nodes?.map((item, index) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-5 border-r px-4 rounded-xl"
              >
                <div className="border self-start text-3xl lg:text-4xl font-semibold rounded-full w-20 h-20 flex items-center justify-center bg-white text-[#2e3192]">
                  {index + 1}
                </div>

                <h1 className="text-3xl lg:text-4xl font-semibold">
                  {item?.pvTitle}
                </h1>

                <p className="text-lg">{item?.pv}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PurposeValues;
