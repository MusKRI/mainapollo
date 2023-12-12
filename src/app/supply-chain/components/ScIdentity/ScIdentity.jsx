// **** Library Imports ****
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// **** Local Imports ****
import FeatImage from "../../images/identity/logistics.png";
import { Counter } from "../../../../components/CounterMotion";

const ScIdentity = () => {
  const MotionLink = motion(Link);
  const MotionArrowRight = motion(BsArrowRight);

  const buttonVariants = {
    rest: {
      right: "-2rem",
    },
    whileHover: {
      left: "-0.5rem",
    },
  };

  const iconVariants = {
    rest: {
      x: 0,
    },
    whileHover: {
      x: 50,
    },
  };

  return (
    <section className="relative px-3 md:px-5 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto py-16 md:py-32">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-row justify-center gap-6">
            <div className="relative overflow-hidden w-full h-full p-4">
              <img src={FeatImage} alt="SC Identity" className="" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <p className="text-lg font-medium text-[#ff7900]">Our Identity</p>
            <h1 className="relative leading-snug text-[28px] md:text-5xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
              Our Logistics Services Empower Businesses For Growth And
              Sustainability.
            </h1>

            <p className="text-[#525252] mt-4 text-lg">
              As a single-source integrated supply chain specialist, Apollo
              Supply Chain provide innovative, tech-driven solutions for your
              logistics requirements so that you can focus on your core business
              and profitability.
            </p>

            <p className="text-[#525252] text-lg">
              Driven by a strong brand lineage, we deliver bespoke solutions
              that simplify, protect, and transform supply chains. Our
              customer-first approach and a sharp focus on IT-based logistics
              solutions catalyze business growth and provide significant savings
              in time and operational expenses.
            </p>

            <div className="flex items-center justify-start">
              <MotionLink
                className="relative flex items-center text-[#ff7900]"
                to={"#"}
                initial="rest"
                whileHover="whileHover"
              >
                <span className="font-medium text-lg text-[#ff7900]">
                  Read more
                </span>
                <motion.div
                  variants={buttonVariants}
                  layout
                  className="border border-[#ff7900] absolute p-3 rounded-full flex justify-end "
                >
                  <MotionArrowRight
                    className="w-4 h-4 self-end"
                    variants={iconVariants}
                  />
                </motion.div>
              </MotionLink>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full border mt-6 md:mt-20 mb-6 md:mb-16" />

        <div className="flex flex-col lg:flex-row md:justify-center md:items-start gap-4 mb-5">
          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={150} />+
              </h1>
              <p className="text-main-text">Customers</p>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={18000} />+
              </h1>
              <p className="text-main-text">Pin Codes Served</p>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={2500} />+
              </h1>
              <p className="text-main-text">Experienced Employees</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row md:justify-center md:items-start gap-4">
          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={2.5} isFixed point={1} /> Mn+
              </h1>
              <p className="text-main-text text-center">
                Square Feet of Warehouse Space
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={15} />
                K+
              </h1>
              <p className="text-main-text">Monthly FTL trips</p>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-6 justify-center">
            <div className="flex flex-col justify-center items-center w-[190px]">
              <h1 className="text-4xl md:text-5xl font-bold text-main-text tracking-wide flex flex-row items-center">
                <Counter from={0} to={45} />+
              </h1>
              <p className="text-main-text">Facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScIdentity;
