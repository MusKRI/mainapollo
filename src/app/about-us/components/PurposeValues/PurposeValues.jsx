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
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 lg:self-center">
            <h1 className="text-[#2e3192] text-6xl font-semibold">Purpose</h1>
            <p className="text-3xl font-semibold">Reason of our Existence</p>
          </div>

          <div className="ml-auto max-w-3xl">
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
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2 lg:self-center">
            <h1 className="text-[#2e3192] text-6xl font-semibold">Values</h1>
            <p className="text-3xl font-semibold">Heartbeat Of Our Existence</p>
          </div>

          <div className="ml-auto max-w-3xl">
            <p className="text-2xl leading-[1.8]">
              Our values continue to direct the growth of businesses under
              Apollo Green Energy Limited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeValues;
