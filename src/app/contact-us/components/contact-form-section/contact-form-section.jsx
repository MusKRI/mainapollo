import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

import "./contact-form-section.css";

const ContactFormSection = () => {
  return (
    <section className="relative px-3 md:px-5 bg-[#f7f5ef]">
      <div className="max-w-7xl mx-auto py-20 relative">
        <h1 className="text-4xl md:text-6xl uppercase text-center font-semibold">
          I am here for
        </h1>

        <div className="my-8">
          <Tabs.Root className="flex flex-col" defaultValue="tab1">
            <Tabs.List
              className="shrink-0 max-w-[800px] mx-auto grid grid-cols-4"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="border-r px-6 text-base lg:text-lg data-[state=active]:text-[#191919] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                value="tab1"
              >
                Business
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-r px-6 text-base lg:text-lg data-[state=active]:text-[#191919] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                value="tab2"
              >
                Career
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-r px-6 text-base lg:text-lg data-[state=active]:text-[#191919] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                value="tab3"
              >
                Media
              </Tabs.Trigger>
              <Tabs.Trigger
                className="px-6 text-base lg:text-lg data-[state=active]:text-[#191919] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
                value="tab4"
              >
                General Enquiry
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="my-4" value="tab1">
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="bg-white !border !border-[#191919] p-12 rounded-md"
              >
                {/* <div className="relative">
                  <h1 className="text-3xl uppercase text-[#2e3192] font-semibold">
                    Thanks for your support in Apollo
                  </h1>
                  <p className="text-lg">
                    Please provide your most valuable information, so we can
                    help you better!
                  </p>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex flex-col gap-2 flex-1 space-y-3 my-3">
                    <div className="input-container">
                      <select
                        name="interested"
                        required=""
                        className="custom-select"
                      >
                        <option
                          value=""
                          disabled
                          selected
                          className="text-base md:text-lg"
                        >
                          Select our business vertical
                        </option>
                        <option value="prox" className="text-base md:text-lg">
                          Apollo ProX
                        </option>
                        <option
                          value="supply chain"
                          className="text-base md:text-lg"
                        >
                          Apollo Supply Chain
                        </option>
                        <option
                          value="fashion"
                          className="text-base md:text-lg"
                        >
                          Apollo Fashion
                        </option>
                        <option
                          value="marketplace"
                          className="text-base md:text-lg"
                        >
                          Apollo Marketplace
                        </option>
                      </select>
                      <div className="underline"></div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="name"
                          required=""
                          placeholder="Name"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="organisation"
                          required=""
                          placeholder="Organisation"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="email"
                          required=""
                          placeholder="Email Address"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="contact"
                          required=""
                          placeholder="Contact no."
                        />
                        <div className="underline"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full">
                      <div className="input-container border h-full">
                        <textarea
                          name="contact"
                          required=""
                          placeholder="Write your message here"
                          className="w-full h-full border border-black p-3 focus:outline-none"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <button className="border self-start my-2 px-4 py-1 rounded-md bg-[#191919] text-white">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content className="my-4" value="tab2">
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="bg-white !border !border-[#191919] p-12 rounded-md"
              >
                {/* <div className="relative">
                  <h1 className="text-3xl uppercase text-[#2e3192] font-semibold">
                    Thanks for your support in Apollo
                  </h1>
                  <p className="text-lg">
                    Please provide your most valuable information, so we can
                    help you better!
                  </p>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex flex-col gap-2 flex-1 space-y-3 my-3">
                    <div className="input-container">
                      <select
                        name="interested"
                        required=""
                        className="custom-select"
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option value="prox">Apollo ProX</option>
                        <option value="supply chain">
                          Apollo Supply Chain
                        </option>
                        <option value="fashion">Apollo Fashion</option>
                        <option value="marketplace">Apollo Marketplace</option>
                      </select>
                      <div className="underline"></div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="name"
                          required=""
                          placeholder="Name"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="organisation"
                          required=""
                          placeholder="Organisation"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="email"
                          required=""
                          placeholder="Email Address"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="contact"
                          required=""
                          placeholder="Contact no."
                        />
                        <div className="underline"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full">
                      <div className="input-container border h-full">
                        <textarea
                          name="contact"
                          required=""
                          placeholder="Query"
                          className="w-full h-full border border-black p-3 focus:outline-none"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <button className="border self-start my-2 px-4 py-1 rounded-md bg-[#191919] text-white">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content className="my-4" value="tab3">
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="bg-white !border !border-[#191919] p-12 rounded-md"
              >
                {/* <div className="relative">
                  <h1 className="text-3xl uppercase text-[#2e3192] font-semibold">
                    Thanks for your support in Apollo
                  </h1>
                  <p className="text-lg">
                    Please provide your most valuable information, so we can
                    help you better!
                  </p>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex flex-col gap-2 flex-1 space-y-3 my-3">
                    <div className="input-container">
                      <select
                        name="interested"
                        required=""
                        className="custom-select"
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option value="prox">Apollo ProX</option>
                        <option value="supply chain">
                          Apollo Supply Chain
                        </option>
                        <option value="fashion">Apollo Fashion</option>
                        <option value="marketplace">Apollo Marketplace</option>
                      </select>
                      <div className="underline"></div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="name"
                          required=""
                          placeholder="Name"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="organisation"
                          required=""
                          placeholder="Organisation"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="email"
                          required=""
                          placeholder="Email Address"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="contact"
                          required=""
                          placeholder="Contact no."
                        />
                        <div className="underline"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full">
                      <div className="input-container border h-full">
                        <textarea
                          name="contact"
                          required=""
                          placeholder="Query"
                          className="w-full h-full border border-black p-3 focus:outline-none"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <button className="border self-start my-2 px-4 py-1 rounded-md bg-[#191919] text-white">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>

            <Tabs.Content className="my-4" value="tab4">
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="bg-white !border !border-[#191919] p-12 rounded-md"
              >
                {/* <div className="relative">
                  <h1 className="text-3xl uppercase text-[#2e3192] font-semibold">
                    Thanks for your support in Apollo
                  </h1>
                  <p className="text-lg">
                    Please provide your most valuable information, so we can
                    help you better!
                  </p>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex flex-col gap-2 flex-1 space-y-3 my-3">
                    <div className="input-container">
                      <select
                        name="interested"
                        required=""
                        className="custom-select"
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option value="prox">Apollo ProX</option>
                        <option value="supply chain">
                          Apollo Supply Chain
                        </option>
                        <option value="fashion">Apollo Fashion</option>
                        <option value="marketplace">Apollo Marketplace</option>
                      </select>
                      <div className="underline"></div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="name"
                          required=""
                          placeholder="Name"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="organisation"
                          required=""
                          placeholder="Organisation"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="email"
                          required=""
                          placeholder="Email Address"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="input-container">
                        <input
                          type="text"
                          name="contact"
                          required=""
                          placeholder="Contact no."
                        />
                        <div className="underline"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="relative h-full">
                      <div className="input-container border h-full">
                        <textarea
                          name="contact"
                          required=""
                          placeholder="Query"
                          className="w-full h-full border border-black p-3 focus:outline-none"
                        />
                        <div className="underline"></div>
                      </div>
                    </div>

                    <button className="border self-start my-2 px-4 py-1 rounded-md bg-[#191919] text-white">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
