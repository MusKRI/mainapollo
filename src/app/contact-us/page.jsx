// import ContactBanner from "./components/contact-banner/contact-banner";
import ContactFormSection from "./components/contact-form-section/contact-form-section";
// import ContactMap from "./components/map/map";

// import BgContactUsImage from "./images/bg-contactus.png";

const ContactUs = () => {
  // const contactData = {
  //   // contact banner data
  //   contactBannerImage: BgContactUsImage,
  //   contactBannerTitle: "Write To Us",
  //   contactBannerDescription: "",
  // };

  return (
    <div className="contact">
      {/* <ContactBanner
        data={{
          bannerImage: contactData.contactBannerImage,
          bannerTitle: contactData.contactBannerTitle,
          bannerDescription: contactData.contactBannerDescription,
        }}
      /> */}

      <ContactFormSection />

      <div className="col-12 mb-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="row mt-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-4 text-center flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Address</p>
                      <p className="text-gray-500">
                        Apollo Marketplace, Apollo Towers, Plot No 20, Sector
                        44, Gurgaon-122002, Haryana, India
                      </p>
                    </div>
                    <div className="col-4 text-center flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Phone</p>
                      <p className="text-gray-500">+91 120 4635800</p>
                    </div>
                    <div className="col-4 text-center flex flex-col items-center">
                      <p style={{ fontWeight: "bold" }}>Email</p>
                      <p className="text-gray-500">
                        info@apollofashioncompany.com
                      </p>
                      <p className="text-gray-500">contact@apolloindia.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ContactMap /> */}
    </div>
  );
};

export default ContactUs;
