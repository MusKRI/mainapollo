// **** Library Imports ****

// **** Local Imports ****

import path1 from "./images/path1.png";

const Founder = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5 bg-[#191919]">
      <span className="absolute top-20 left-10 text-9xl text-white">&#10077;</span>
      <div className="absolute inset-0 z-[-2] clipGradient"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-8 relative">
        <div className="flex-1 px-6 flex flex-col gap-3 self-center">
          <h4 className="text-xl whitespace-pre-line text-white">
            &quot;{data.humbleSection}&quot;
          </h4>

          <h4 className="text-xl whitespace-pre-line font-bold text-white">
            <div>{data.humbleFinalSection}</div>
          </h4>
        </div>

        <div className="flex-1 flex flex-row justify-center">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={path1}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
