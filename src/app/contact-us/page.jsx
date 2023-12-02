import ContactBanner from "./components/contact-banner/contact-banner";
import ContactFormSection from "./components/contact-form-section/contact-form-section";
// import ContactMap from "./components/map/map";

import BgContactUsImage from "./images/bg-contactus.png";

const ContactUs = () => {
  const contactData = {
    // contact banner data
    contactBannerImage: BgContactUsImage,
    contactBannerTitle: "Write To Us",
    contactBannerDescription: "",
  };

  return (
    <>
      <ContactBanner
        data={{
          bannerImage: contactData.contactBannerImage,
          bannerTitle: contactData.contactBannerTitle,
          bannerDescription: contactData.contactBannerDescription,
        }}
      />

      <ContactFormSection />

      {/* <ContactMap /> */}
    </>
  );
};

export default ContactUs;
