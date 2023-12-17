// **** Library imports *****
import { motion } from "framer-motion";

import { Counter } from "../../../../components/CounterMotion";

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
    <section className="relative px-3 md:px-5 bg-[#191919] text-white">
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
          <h2 className="text-left text-4xl font-semibold">About</h2>
          <h4 className="text-xl whitespace-pre-line  ">{data?.subtitle1}</h4>
          <h4 className="text-xl whitespace-pre-line  ">{data?.subtitle2}</h4>
          <h4 className="text-xl whitespace-pre-line  ">{data?.subtitle3}</h4>

          <div className="bg-white w-full p-4 !py-14 rounded-lg text-[#191919] my-4 !mt-16 [box-shadow:0px_0px_10px_0px_#878787] relative overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#878787] z-[2]"></div>
            <div className="flex flex-row flex-wrap justify-between items-start lg:justify-center lg:gap-20 relative z-10">
              <div className="flex flex-col text-center w-[200px] items-center">
                <h3 className="text-3xl lg:text-5xl font-semibold flex flex-row items-center">
                  <Counter from={0} to={20} />+
                </h3>
                <p className="text-xl lg:text-xl">
                  Years of
                  <br />
                  Market Legacy
                </p>
              </div>

              <div className="flex flex-col text-center w-[200px] items-center">
                <h3 className="text-3xl lg:text-5xl font-semibold flex flex-row items-center">
                  <Counter from={0} to={45} />+
                </h3>
                <p className="text-xl lg:text-xl">
                  Countries, Extensive
                  <br />
                  Global Operations
                </p>
              </div>

              <div className="flex flex-col text-center w-[200px] items-center">
                <h3 className="text-3xl lg:text-5xl font-semibold flex flex-row items-center">
                  <Counter from={0} to={1000} />+
                </h3>
                <p className="text-xl lg:text-xl">
                  Clients
                  <br />
                  Worldwide
                </p>
              </div>

              <div className="flex flex-col text-center w-[200px] items-center">
                <h3 className="text-3xl lg:text-5xl font-semibold flex flex-row items-center">
                  <Counter from={0} to={6000} />+
                </h3>
                <p className="text-xl lg:text-xl">
                  Dedicated
                  <br />
                  workforce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
