// **** Library imports *****
import { motion } from "framer-motion";

// local imports
// import Imgs from "./images/imgs.jpeg";

// const imgNodes = [
//   {
//     id: "1",
//     img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
//     title: "Excepteur sint occaecat",
//     description:
//       "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
//   },
// ];

const WhoWeAre = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-20 relative">
        {/* <div className="flex-1 flex flex-row justify-center">
          <motion.div
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
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={data.image ?? Imgs}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
          </motion.div>
        </div> */}

        <div className="flex-1 px-6 flex flex-col gap-3 self-center">
          <motion.h4
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
            className="text-xl whitespace-pre-line  "
          >
            {data?.subtitle1}
          </motion.h4>
          <motion.h4
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
            className="text-xl whitespace-pre-line  "
          >
            {data?.subtitle2}
          </motion.h4>
          <motion.h4
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
            className="text-xl whitespace-pre-line  "
          >
            {data?.subtitle3}
          </motion.h4>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
