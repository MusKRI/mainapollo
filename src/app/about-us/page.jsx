import axios from "axios";
import { useEffect, useState } from "react";
import AboutUsBanner from "./components/Banner/Banner";
import PurposeValues from "./components/PurposeValues/PurposeValues";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
// import WonderfulTeam from "./components/WonderfulTeam/WonderfulTeam";

import AboutusBanner from "./images/banner.jpg";

const AboutUs = () => {
  const [initialData, setInitialData] = useState({});

  console.log(initialData);

  useEffect(() => {
    axios
      .get("https://webwila.com/giftopedia/public/api/v1/getallpages", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res);
        // setInitialData(res.data.data.page.meta_data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const aboutusData = {
    // banner data
    bannerImage: AboutusBanner,
    bannerTag: "Apollo About us",
    // bannerTitle: "",
    // bannerDescription:
    //   "Witness our journey of building a cleaner and greener India harnessing the power of sun and the strength of the wind",

    // who we are data

    whoweareSubtitle1:
      "We are a trusted global conglomerate with a legacy spanning over three decades. Established in 1994, we have become a premier business entity, creating a positive impact in over 45 countries anchored by an extraordinary force of 6000+ employees worldwide, we unlock potential for 1000+ clients.",
    whoweareSubtitle2:
      "Our diversified business interests reflect our commitment to excellence. Apollo Green Energy pioneers’ sustainability and innovation, while Apollo Supply Chain provides integrated, tech-driven logistics solutions. Apollo Fashion manufactures textile garment, accessories, and footwear for leading international brands. Apollo ProX executes large industrial and infrastructure projects whereas Apollo Marketplace connects businesses globally.",
    whoweareSubtitle3:
      "At Apollo green energy, we blend legacy with innovation, empowering businesses to thrive. Join us on this transformative journey toward progress, sustainability, and positive impact. Together, we shape a future where meaningful connections drive success and global progress.",
    whoweareNodes: {
      img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      title: "Excepteur sint occaecat",
      description:
        "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
    },

    // purpose values
    purposeValuesSubtitle: "About Us",
    purposeValuesTitle: "Purpose & Values",
    purposeValuesDescription:
      "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.",
    purposeValuesNodes: [
      {
        id: "1",
        pv: "The entrepreneurial spirit runs strong at Apollo Green Energy. We encourage our people to think big and own their work.",
        pvTitle: "Own It",
      },
      {
        id: "2",
        pv: "Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. We do the right thing — even when no one is watching.",
        pvTitle: "Do The Right Thing",
      },
      {
        id: "3",
        pv: "We strive to set the highest standard of quality in everything we do. We always want to drive towards the next great thing by constantly challenging ourselves to improve and break new ground.",
        pvTitle: "Be The Next",
      },
      {
        id: "4",
        pv: "We only succeed when our clients do — and that drives us. Our people will overcome obstacles, find solutions and deliver exceptional results that help our clients be ahead.",
        pvTitle: "Action Is Our First Instinct",
      },
      {
        id: "5",
        pv: "We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships. We celebrate and embrace our diversity, finding ways for everyone to belong.",
        pvTitle: "Stronger United",
      },
    ],

    // team data
    teamSubtitle: "Meet",
    teamTitle: "Meet Our Leadership",
    teamMembers: [
      {
        id: "1",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "2",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "3",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "4",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "5",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "6",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "7",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "8",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
      {
        id: "9",
        image:
          "https://apollosupplychain.com/cms/wp-content/uploads/2023/05/raaja_kanwar_new.jpg",
        name: "Raaja Kanwar",
        position:
          "Chairman and Managing Director, Apollo International Limited & Apollo Supply Chain",
        about:
          "A scion of the Kanwar family, the promoters of Apollo Tyres, Raaja Kanwar chose to carve a path following his passion for start-ups using disruptive technology. Raaja Kanwar founded Apollo International Limited (AIL) in 1994 to fulfil the stated aim of ‘Delivering Sustainable Value Creation’. Present in over 45 countries, AIL is a global business conglomerate that operates AIL operates in diverse sectors including tyres, garments and accessories, EPC & Project Management, digital cinema, and the healthcare industry. Today, leading companies across the globe trust AIL for its unmatched business expertise and high standards of business ethics.",
      },
    ],
  };

  return (
    <div className="">
      <AboutUsBanner
        data={{
          image: aboutusData.bannerImage,
          tag: aboutusData.bannerTag,
        }}
      />

      <WhoWeAre
        data={{
          subtitle1: aboutusData.whoweareSubtitle1,
          subtitle2: aboutusData.whoweareSubtitle2,
          subtitle3: aboutusData.whoweareSubtitle3,
          nodes: aboutusData.whoweareNodes,
        }}
      />

      <PurposeValues
        data={{
          subtitle: aboutusData.purposeValuesSubtitle,
          title: aboutusData.purposeValuesTitle,
          description: aboutusData.purposeValuesDescription,
          nodes: aboutusData.purposeValuesNodes,
        }}
      />

      {/* <WonderfulTeam
        data={{
          subtitle: aboutusData.teamSubtitle,
          title: aboutusData.teamTitle,
          members: aboutusData.teamMembers,
        }}
      /> */}
    </div>
  );
};

// https://webwila.com/giftopedia/public/api/v1/page/about-us

// https://webwila.com/giftopedia/public/api/v1/getallpages

export default AboutUs;
