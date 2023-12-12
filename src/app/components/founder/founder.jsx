// **** Library Imports ****

// **** Local Imports ****

const Founder = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="absolute inset-0 z-[-2] clipGradient"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between py-8 relative">
        <div className="flex-1 flex flex-row justify-center">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={data.humbleLogo}
              alt="about-img1"
              className="w-[400px] md:w-[540px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 px-6 flex flex-col gap-3 self-center">
          <h4 className="text-xl whitespace-pre-line  ">
            &quot;{data.humbleSection}&quot;
          </h4>

          <h4 className="text-xl whitespace-pre-line font-bold">
            <div>{data.humbleFinalSection}</div>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Founder;
