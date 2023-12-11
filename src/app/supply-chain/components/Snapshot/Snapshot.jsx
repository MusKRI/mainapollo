// **** Library Imports ****
import { motion } from "framer-motion";

// **** Local Imports *****
import GImg1 from "../../images/snapshot/s1.jpeg";
import GImg2 from "../../images/snapshot/s2.png";
import GImg3 from "../../images/snapshot/s3.jpg";
import GImg4 from "../../images/snapshot/s4.jpeg";
import GImg5 from "../../images/snapshot/s5.jpeg";

// const imageVariants = {
//   hidden: {
//     left: 0,
//     right: 0,
//     top: 0,
//     opacity: 0,
//   },
//   onHover: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     opacity: 1,
//     mixBlendMode: "hard-light",
//   },
// };

const Snapshot = () => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-16 md:py-32">
        <div className="flex flex-col gap-7">
          <h2 className="relative leading-snug text-3xl lg:text-6xl text-main-text after:absolute after:border-2 after:left-0 after:-bottom-4 after:w-10 after:border-main-text">
            Snapshot
          </h2>
        </div>

        <div className="mt-10">
          <div className="flex flex-row gap-2 shrink">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="relative">
                  <img
                    src={GImg2}
                    alt="Image 1"
                    className="w-[450px] h-full rounded-lg"
                  />
                </div>
                <div className="relative">
                  <img
                    src={GImg3}
                    alt="Image 1"
                    className="w-[400px] h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="relative">
                <img
                  src={GImg1}
                  alt="Image 1"
                  className="w-[860px] rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <div className="relative">
                <img
                  src={GImg4}
                  alt="Image 1"
                  className="w-[400px] h-full rounded-lg"
                />
              </div>

              <div className="flex-1">
                <img
                  src={GImg5}
                  alt="Image 1"
                  className="w-[400px] h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3">
          <div className="container">
            <div className="row justify-center">
              <div className="col-12 mt-5">
                <div
                  style={{ fontWeight: "bold" }}
                  className="text-center text-3xl lg:text-6xl"
                >
                  Experience Apollo Supply Chain
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="row justify-center">
                      <div className="col-4 text-center">
                        <p style={{ fontWeight: "bold" }}>Phone</p>
                        <p>0124-674-0200</p>
                      </div>
                      <div className="col-4 text-center">
                        <p style={{ fontWeight: "bold" }}>Email</p>
                        <p>connect@apollosupplychain.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
