import { motion } from "framer-motion";

const AboutUsBanner = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh)]">
      <img
        src={data?.image}
        alt="About Us Banner"
        className="h-[calc(100vh)] w-full object-cover"
      />

      <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-50 px-3 md:px-5">
        <div className="max-w-7xl mx-auto flex flex-col justify-between py-16 h-full">
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-white text-2xl">{data?.tag}</h4>
            <div className="h-1 w-10 bg-white" />
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-white text-5xl lg:text-7xl font-semibold"
            >
              {data?.title}
            </motion.h1>
            <motion.p
              initial={{
                y: -20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                },
              }}
              className="text-white max-w-sm text-lg"
            >
              {data?.description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
