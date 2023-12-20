// **** Library Imports ****

// **** Local Imports ****
import QuoteSvg from "../../../../public/quote2.svg";

import path1 from "./images/path1.png";

const Founder = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5 bg-[#191919]">
      <span className="absolute top-3 left-2 lg:top-20 lg:left-10 text-9xl text-white w-[24px] md:w-[60px] [&_svg]:fill-white">
        <img src={QuoteSvg} alt="" />
      </span>
      <div className="absolute inset-0 z-[-2] clipGradient"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-8 relative">
        <div className="flex-1 px-6 flex flex-col gap-3 self-center">
          <h4 className="text-base lg:text-[20px] whitespace-pre-line text-white">
            {data.humbleSection}
          </h4>

          <h4 className="text-xl whitespace-pre-line font-bold text-white hidden md:block">
            {/* <div>{data.humbleFinalSection}</div> */}
            <div className="flex flex-col">
              <p className="text-3xl">Mr. Raaja Kanwar</p>
              <p>Chairman & Managing Director, Apollo International Group</p>
            </div>
          </h4>
        </div>

        <div className="flex-1 flex flex-row justify-center">
          <div className="relative rounded-lg">
            <img
              src={path1}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
            <div className="absolute text-white right-0 bottom-0 md:hidden">
              <div className="flex flex-col items-end max-w-xs">
                <p className="text-end text-lg font-semibold">
                  Mr. Raaja Kanwar
                </p>
                <p className="text-end">
                  Chairman & Managing Director, Apollo International Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
