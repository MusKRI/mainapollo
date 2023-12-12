// import Arrow from "../../images/arrow.png";
import { motion } from "framer-motion";

const MakingDifference = ({ data }) => {
  return (
    <div className="relative !py-4 md:!py-20">
      <div className="px-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex-col justify-end relative">
          <motion.h1 className="text-5xl font-semibold">
            {/* {data?.title} */}Making a difference,
          </motion.h1>
          <h1 className="text-5xl font-semibold">one project at a time</h1>

          {/* <div className="absolute bottom-4 w-60 hidden md:block">
            <img alt="Arrow" src={Arrow} />
          </div> */}
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <motion.p className="text-lg max-w-xl">{data?.desc1}</motion.p>
          <motion.p className="text-lg max-w-xl">{data?.desc2}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
