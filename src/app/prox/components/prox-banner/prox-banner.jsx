import "./prox-banner.css";

const ProxBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-72px)]">
      <div className="prox-banner ">
        <img
          src={data?.bannerImage}
          alt="Contact Banner"
          className="h-[calc(100vh-72px)] max-w-full min-w-0 w-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center p-10 md:p-20">
        <div className="flex flex-col gap-10 justify-between w-full h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#191919] text-2xl">Apollo ProX</h4>
            <div className="h-1 w-10 bg-[#191919]" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#191919] capitalize max-w-2xl">
            {data?.bannerTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProxBanner;
