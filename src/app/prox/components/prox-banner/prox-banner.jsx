// import { MoveDown } from "lucide-react";

import "./prox-banner.css";

// import BgContactUsImage from "../../images/bg-contactus.png";

const ProxBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-72px)] prox-banner">
      <div className="img-gradient">
        <img
          src={data?.bannerImage}
          alt="Contact Banner"
          className="h-[calc(100vh-72px)] max-w-full min-w-0 w-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center p-10 md:p-20">
        <div className="flex flex-col gap-10 justify-between w-full h-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-2xl">Apollo ProX</h4>
            <div className="h-1 w-10 bg-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white capitalize max-w-2xl">
            {data?.bannerTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProxBanner;
