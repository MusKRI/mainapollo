// **** Library Imports ****
import { Link } from "react-router-dom";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

// **** Local Imports ****

const Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
let background = { background: "#1c1c1c" };

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className=" " style={background}>
        <motion.div
          initial="hidden"
          whileInView="whileInView"
          className="flex-col lg:flex-row border-2 hidden lg:flex"
        >
          <div className="flex-[0.75] mx-auto px-4 lg:pl-20 pt-10 flex-col gap-8 items-center">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              {/* Column 1 -> Businesses */}
              <div className="flex flex-col gap-4 lg:basis-1/3">
                <motion.h3
                  variants={Variants}
                  className="border-b text-xl font-medium text-white"
                >
                  Businesses
                </motion.h3>

                <div className="flex flex-col gap-2">
                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/aboutus" className="text-white">
                      Apollo Green Energy
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/supply-chain" className="text-white">
                      Apollo Supply Chain
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/fashion" className="text-white">
                      Apollo Fashion
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/prox" className="text-white">
                      Apollo ProX
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/marketplace" className="text-white">
                      Apollo Marketplace
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Column 2 -> About Us */}
              <div className="flex flex-col gap-4 lg:basis-1/3">
                <motion.h3
                  variants={Variants}
                  className="border-b text-xl font-medium text-white"
                >
                  About Us
                </motion.h3>

                <div className="flex flex-col gap-2">
                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/aboutus" className="text-white">
                      Who We Are
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/aboutus" className="text-white">
                      Purpose & Values
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={Variants}
                    className="flex flex-row items-center gap-2"
                  >
                    <Link to="/aboutus" className="text-white">
                      Leadership
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Column 3 -> Corporate Office */}
              <div className="flex flex-col gap-4 lg:basis-2/3">
                <motion.h3
                  variants={Variants}
                  className="border-b text-xl font-medium text-white"
                >
                  Corporate Office
                </motion.h3>

                <div className="flex flex-col gap-2">
                  <motion.h2 variants={Variants} className="text-lg text-white">
                    Apollo Green Energy Limited
                  </motion.h2>
                  <motion.p
                    variants={Variants}
                    className="text-white text-[16px]"
                  >
                    Apollo Towers, Plot No 20, Sector 44 Gurgaon - 122002,
                    Haryana, India
                  </motion.p>
                </div>

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between mb-5 mt-3">
                  <motion.div
                    variants={Variants}
                    className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8"
                  >
                    <Link to="#" className="text-white mr-2 border-r pr-2">
                      Privacy Statement
                    </Link>
                    <Link to="#" className="text-white mr-2 border-r pr-2">
                      Terms & Condition
                    </Link>
                    <Link to="#" className="text-white border-r pr-2">
                      Sitemap
                    </Link>
                    <Link to="/contact" className="text-white">
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:hidden text-white">
          <div className="px-4 flex flex-col gap-6 py-6">
            <Accordion.Root type="single" collapsible className="space-y-4">
              <Accordion.Item value="item-1" className="space-y-2">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex flex-row items-center justify-between border-b">
                    <h3 className="text-lg font-medium text-white">
                      Businesses
                    </h3>
                    <IoChevronDownOutline className="w-4 h-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-3">
                  <div className="flex flex-col gap-1">
                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/aboutus" className="text-white">
                        Apollo Green Energy
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/supply-chain" className="text-white">
                        Apollo Supply Chain
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/fashion" className="text-white">
                        Apollo Fashion
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/prox" className="text-white">
                        Apollo ProX
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/marketplace" className="text-white">
                        Apollo Marketplace
                      </Link>
                    </motion.div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2" className="space-y-2">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex flex-row items-center justify-between border-b">
                    <h3 className="text-lg font-medium text-white">About Us</h3>
                    <IoChevronDownOutline className="w-4 h-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-3">
                  <div className="flex flex-col gap-1">
                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/aboutus" className="text-white">
                        Who We Are
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/aboutus" className="text-white">
                        Purpose & Values
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={Variants}
                      className="flex flex-row items-center gap-2"
                    >
                      <Link to="/aboutus" className="text-white">
                        Leadership
                      </Link>
                    </motion.div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg border-b">Corporate Office</h3>

              <div className="flex flex-col gap-2">
                <motion.h2 variants={Variants} className="text-base text-white">
                  Apollo Green Energy Limited
                </motion.h2>
                <motion.p variants={Variants} className="text-white text-base">
                  Apollo Towers, Plot No 20, Sector 44 Gurgaon - 122002,
                  Haryana, India
                </motion.p>
              </div>
            </div>

            <div className="px-3 flex flex-wrap gap-3 content-center items-center justify-center py-2">
              <Link to="#" className="text-white border-r pr-2">
                Privacy Statement
              </Link>
              <Link to="#" className="text-white border-r pr-2">
                Terms & Condition
              </Link>
              <Link to="#" className="text-white border-r pr-2">
                Sitemap
              </Link>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-3">
        <motion.p
          variants={Variants}
          className="text-center font-medium text-base"
        >
          Copyright &copy;{" "}
          {new Date().getFullYear() === 2023 ? 2024 : new Date().getFullYear()}.
          All rights reserved. Apollo Green Energy Limited.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
