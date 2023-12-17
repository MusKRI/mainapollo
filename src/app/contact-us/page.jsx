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

      <div className="border flex flex-col lg:flex-row ">
        <div className="py-10 px-10 flex flex-col gap-3 flex-[0.5]">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Corporate Office</h2>

            <p className="text-xl">
              Apollo Towers, Plot No 20, Sector 44, Gurgaon-122002, Haryana,
              India
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Phone</h2>

            <p className="text-xl">+91 120 4635800</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Email</h2>

            <p className="text-xl">contact@apolloindia.com</p>
          </div>
        </div>

        <div className="w-full flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9000842417076!2d77.06485627417885!3d28.452428192239005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1869eaaaaaab%3A0x2565dd0b1877cf37!2sApollo%20Green%20Energy%20Limited%20(formerly%20known%20as%20Apollo%20International%20Limited)!5e0!3m2!1sen!2sin!4v1702361506124!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullscreen=""
            loading="lazy"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* <div className="col-12 mb-5 mt-3">
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
      </div> */}

      {/* <ContactMap /> */}
    </div>
  );
};

export default ContactUs;
