import OurFocus from "./components/our-focus/page";
import PeoplePlanetBanner from "./components/pp-banner/pp-banner";
import TabSection from "./components/tab-section/tab-section";

// pp hero images
import Banner from "./images/banner.png";
import sh1 from "./images/sh1.jpeg";
import sh2 from "./images/sh2.jpg";
import sh3 from "./images/sh-3.png";
import sh4 from "./images/sh4.jpg";

// tab section images
// import TabImage from "./images/4.png";
import educationImg from "./images/education.jpg";
import envImg from "./images/environment.jpg";
import healthcareImg from "./images/Healthcare.jpeg";

import MakingDifference from "./components/making-difference/making-difference";

const peopleplanetData = {
  // People Planet Hero Data
  ppHeroTag: "People & Planet",
  ppHeroHeading: "Beyond Business",
  ppHeroBackgroundImage: Banner,

  // our focus data
  ppFocusTitle: "What is good for us",
  ppFocusDescription:
    "At Apollo Green Energy, we deeply care about making a real difference. We work hard to boost the economy while making life better for everyone in our communities. It's not just business to us; it's about touching lives, bringing hope, and leaving a positive mark on the world. Because, What’s good for people and the planet, is good for us.",
  ppFocusVideo: "",

  // Tabs Section Data
  tabs: [
    {
      id: "education",
      image: educationImg,
      name: "Education",
      heading: "Promoting Quality Education for All",
      subheading1:
        "Women, young girls, and children are mostly left behind when it comes to getting a chance to realize their full potential via the education that they deserve.",
      subheading2:
        "Apollo Energy act in the present to work towards a better future.",
      subheading3:
        "At Apollo, we provide educational assistance to the children living near its facility in Panvel, Maharashtra by providing them with study material so they can benefit from getting the education they need to build a better future.",
    },
    {
      id: "healthcare",
      image: healthcareImg,
      heading: "Making Equal Access to Healthcare A Reality",
      name: "Healthcare",
      subheading1:
        "Research has shown that access to healthcare has not been identified as a rural priority for many years now. Apollo Green Energy has partnered with Dasra, a Mumbai-based strategic philanthropy foundation. As a part of that, Apollo Green Energy supports the AHAAR program under SNEHA (Society for Nutrition, Education and Health Action) Through this partnership, we are helping the organisation in making efforts towards eliminating child malnutrition within the Dharavi region.",
      subheading2: "",
      subheading3: "",
    },
    {
      id: "environment",
      image: envImg,
      heading: "Protecting Our Environment",
      name: "Environment",
      subheading1:
        "Apollo Green Energy’s goal is to make not only a societal but also an environmental impact. We have ensured that all our business verticals take steps towards being environmentally conscious.",
      subheading2:
        "Actively engaged win the implementation of biz practices; Rainwater Harvesting, utilizing solar power as an electricity source at many of our warehouses, conducting an e-saver campaign wherein energy-saving measures are taken throughout the organisation in daily activities and more. Our fashion vertical implements ethical sourcing and continuous recycling to create a highly sustainable standard of conducting business.",
      subheading3: "",
    },
  ],

  // making difference data
  mdTitle: "Making a difference, one project at a time",
  mdDescription1:
    "For each of us in the Apollo Green Energy/ Apollo Group, every project's successful execution fills our hearts with deep satisfaction. It's a tangible reflection of our dedication to embodying our values and playing a leadership role, all while being a caring and responsible corporate citizen.",
  mdDescription2:
    "As we contribute in our humble way, we're inspired by the realization that there's much more to do, especially considering the size and unique challenges of our country.",
};

const PeoplePlanet = () => {
  return (
    <>
      <PeoplePlanetBanner
        data={{
          tag: peopleplanetData.ppHeroTag,
          heading: peopleplanetData.ppHeroHeading,
          bgImage: peopleplanetData.ppHeroBackgroundImage,
        }}
      />

      <div className="relative py-4 md:py-32 my-20">
        <div className="px-16 md:px-32 flex flex-col md:flex-row ">
          <div className="flex-1 flex flex-wrap gap-3">
            <div className="relative w-[236px]">
              <img
                src={sh1}
                alt=""
                className="rounded-md object-cover h-full"
              />
            </div>
            <div className="relative w-[236px]">
              <img
                src={sh2}
                alt=""
                className="rounded-md object-cover h-full"
              />
            </div>
            <div className="relative w-[236px]">
              <img
                src={sh3}
                alt=""
                className="rounded-md object-cover h-full"
              />
            </div>
            <div className="relative w-[236px]">
              <img
                src={sh4}
                alt=""
                className="rounded-md object-cover h-full"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 self-center">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              What’s good for people and the planet, is good for us.
            </h1>
            <p className="text-lg">
              We are focused on achieving excellence in our business vertices
              and creating a positive impact on the lives of those who need it.
            </p>
            <p>
              We have undertaken various initiatives and campaigns in areas of
              healthcare, education, nutrition, and environment along with the
              well-being of women, adolescent girls, and younger children. We
              are dedicated to addressing these concerns and using our resources
              to reach out to as many individuals as possible and transform
              their lives. At Apollo Green Energy, we believe that uplifting the
              weaker sections of society, will fast-track the growth towards a
              developed and sustainable nation.
            </p>
          </div>
        </div>
      </div>

      <OurFocus
        data={{
          title: peopleplanetData.ppFocusTitle,
          description: peopleplanetData.ppFocusDescription,
          video: peopleplanetData.ppFocusVideo,
        }}
      />

      <TabSection data={peopleplanetData.tabs} />

      <div className="px-3 md:px-20 bg-white text-[#191919]">
        <div className="py-20 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="relative max-w-3xl mx-auto">
              <span className="absolute top-[-20px] left-[-20px] text-9xl text-[#191919] bg-white ">
                ❝
              </span>

              <h5 className="text-xl max-w-3xl text-center mx-auto lg:text-4xl border !border-[#191919] p-8">
                To be able to be in a position where we can help make a
                difference is an honour I cherish every day. Every step we take
                as a company towards the betterment of others leaves a sense of
                fulfilment that is unmatched.
              </h5>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="text-center text-3xl font-bold">
                Mr. Raaja Kanwar
              </h5>
              <h6 className="text-xl text-center">
                Chairman & Managing Director, Apollo International Group
              </h6>
            </div>
          </div>
        </div>
      </div>

      <MakingDifference
        data={{
          title: peopleplanetData.mdTitle,
          desc1: peopleplanetData.mdDescription1,
          desc2: peopleplanetData.mdDescription2,
        }}
      />
    </>
  );
};

export default PeoplePlanet;
