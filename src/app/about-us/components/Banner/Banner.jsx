const AboutUsBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh)] about-banner">
      <img
        src={data?.image}
        alt="About Us Banner"
        className="h-[calc(100vh)] w-full object-cover"
      />

      <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-50 px-3 md:px-5">
        {/* <div className="max-w-7xl mx-auto flex flex-col justify-between py-16 h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">{data?.tag}</h4>
            <div className="h-1 w-10 bg-white" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsBanner;
