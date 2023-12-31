import Imgs from "./imgs3.jpeg";

const NewSection = ({ data }) => {
  console.log("inception", data);
  return (
    <div className="relative h-[90vh]">
      <div className="img-gradient-gray">
        <img
          src={data.image ?? Imgs}
          alt="Contact Banner"
          className="h-[90vh] max-w-full w-full min-w-0 object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center p-10 md:p-20 backdrop-brightness-50">
        <div className="flex flex-col gap-10 items-center w-full">
          <h1 className="text-3xl md:text-6xl text-center text-white">People & Planet</h1>
          <p className="text-white max-w-xl text-base md:text-[18px] mx-auto text-justify">
            {data?.description ??
              "Since our inception, we've dedicated ourselves to delivering sustainable value creation. Our initiatives span education, healthcare, and environmental sustainability, aiming to uplift underserved communities and foster a sustainable nation. Each project we undertake reflects our dedication to embodying our values and serving as responsible corporate citizens, all while making a tangible difference."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
