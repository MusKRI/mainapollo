// **** Library Imports *****
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

// ***** Local Imports ******

// const teamMembers = [
//   {
//     id: "1",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "2",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "3",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "4",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "5",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "6",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "7",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
//   {
//     id: "8",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     name: "Paddy O'Furniture",
//     position: "Name of Position",
//   },
// ];

const SocialContainerVariants = {
  hidden: {
    y: -3,
    opacity: 0,
  },
  onHover: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const socialVariants = {
  hidden: {
    y: -3,
    opacity: 0,
  },
  onHover: {
    y: 0,
    opacity: 1,
  },
};

const WonderfulTeam = ({ data }) => {
  return (
    <section className="relative px-3 md:px-5">
      <div className="max-w-7xl mx-auto flex flex-col py-16 md:py-32">
        <div className="flex flex-col gap-7 items-center">
          {/* <h2 className="text-center text-2xl">{data?.subtitle}</h2> */}
          <h1 className="text-4xl lg:text-6xl">{data?.title}</h1>
        </div>

        <div className="mt-10 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data?.members.map((member) => {
              return (
                <div
                  className="relative bg-white border group overflow-y-hidden"
                  key={member.id}
                >
                  <div className="relative">
                    <img src={member?.image} alt="" />
                  </div>

                  <div className="px-4 py-8 flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">{member?.name}</h2>
                    <p className="text-gray-500">{member?.position}</p>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full bg-[#2e3192a1] backdrop-blur-lg transition translate-y-full group-hover:translate-y-0 duration-300 p-8 flex flex-col gap-2">
                    <h1 className="text-3xl text-white font-bold">
                      {member?.name}
                    </h1>

                    <p className="text-gray-100 text-xl">{member?.position}</p>

                    <div className="max-h-[300px] overflow-y-auto text-white">
                      <p>{member?.about}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderfulTeam;
