// import Arrow from "../../images/arrow.png";
import { motion } from "framer-motion";

const MakingDifference = ({ data }) => {
  return (
    <div className="relative !py-4 md:!py-20">
      <div className="px-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-end relative">
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
            className="text-5xl font-semibold"
          >
            {data?.title}
          </motion.h1>

          {/* <div className="absolute bottom-4 w-60 hidden md:block">
            <img alt="Arrow" src={Arrow} />
          </div> */}
        </div>
        <div className="flex-1 flex-col flex gap-4">
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
            className="text-lg max-w-xl"
          >
            {data?.desc1}
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
            className="text-lg max-w-xl"
          >
            {data?.desc2}
          </motion.p>

          {/* <button className="self-start border p-8 text-center flex items-center justify-center rounded-full animate-pulse">
            Explore
            <br />
            More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MakingDifference;
