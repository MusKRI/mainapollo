// **** Library Imports ****

// **** Local Imports ****
import SupplyChainBanner from "./components/SupplyChainBanner/SupplyChainBanner";
import ScIdentity from "./components/ScIdentity/ScIdentity";
import ExpertiseArea from "./components/ExpertiseArea/ExpertiseArea";
import TheEdge from "./components/TheEdge/TheEdge";
import Sectors from "./components/Sectors/Sectors";
import Snapshot from "./components/Snapshot/Snapshot";

import hs1 from "./images/hero-slider/hs1.jpeg";
import hs2 from "./images/hero-slider/hs2.jpeg";
import hs3 from "./images/hero-slider/hs3.jpeg";

const SupplyChain = () => {
  const supplyChainData = {
    // banner data
    supplyBannerSubtitle: "Apollo Supply Chain",
    supplyBannerTitle: "Complex Supply Chain. Simplified",
    supplyBannerDescription:
      "We offer customized solutions for supply chain competitiveness and resilience.",
    supplyBannerNodes: [hs1, hs2, hs3],

    // supplyIdentity data
    supplyIdentityFeatureImage: "",
    supplyIdentitySubtitle: "",
    supplyIdentityTitle: "",
    supplyIdentityDescription1: "",
    supplyIdentityDescription2: "",
  };

  return (
    <>
      <SupplyChainBanner
        data={{
          subtitle: supplyChainData.supplyBannerSubtitle,
          title: supplyChainData.supplyBannerTitle,
          description: supplyChainData.supplyBannerDescription,
          nodes: supplyChainData.supplyBannerNodes,
        }}
      />
      <ScIdentity />
      <ExpertiseArea />

      <TheEdge />

      <Sectors />

      <Snapshot />
    </>
  );
};

export default SupplyChain;
