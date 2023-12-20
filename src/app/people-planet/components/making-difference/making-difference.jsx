// import Arrow from "../../images/arrow.png";
import { motion } from "framer-motion";

const MakingDifference = ({ data }) => {
  return (
    <div className="relative !py-4 md:!py-20 bg-[#191919] text-white">
      <div className="px-8 flex flex-col md:flex-row gap-3 md:gap-10">
        <div className="flex-1 flex-col justify-end relative">
          <motion.h1 className="text-3xl md:text-6xl font-semibold">
            {/* {data?.title} */}Making a difference,
          </motion.h1>
          <h1 className="text-3xl md:text-6xl font-semibold relative after:absolute after:bottom-[-10px] after:left-0 after:w-[60px] after:h-[4px] after:bg-[#191919]">
            one project at a time
          </h1>
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <motion.p className="text-base md:text-lg max-w-xl">{data?.desc1}</motion.p>
          <motion.p className="text-base md:text-lg max-w-xl">{data?.desc2}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
