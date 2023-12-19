import { motion } from "framer-motion";

// import FocusVideo from "../../images/focus-video.png";

const OurFocus = ({ data }) => {
  return (
    <div className="bg-[#eee5e2]">
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto w-full rounded-tr-lg rounded-br-lg flex flex-col items-center">
          <div className="flex flex-col text-center gap-8">
            <motion.h1 className="text-6xl font-bold border">
              {data.title}
            </motion.h1>
            <motion.p className="max-w-3xl text-[#525252] text-lg border">
              {data.description}
              <br />
              What’s good for people and the planet, is good for us.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
