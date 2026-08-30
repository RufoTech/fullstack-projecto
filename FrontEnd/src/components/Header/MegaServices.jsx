import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/data";

function MegaServices({ active }) {
  const services = data.header.megaServiceItems;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const currentService = services[activeIndex] ?? services[0];

  const changeIndex = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 480 : -480,
    }),
    center: { y: 0 },
    exit: (dir) => ({
      y: dir > 0 ? -480 : 480,
    }),
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`mt-4 w-full bg-[#F1F6F9] p-2 pl-[40px] py-2 rounded-3xl transition-all duration-500 ease-out ${
          active === "service"
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 rounded-3xl pointer-events-none absolute"
        }`}
      >
        <div className="flex items-start gap-[12px]">
          <div className="flex items-center">
            <div className="flex flex-col gap-[6px] pr-2">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  onMouseEnter={() => changeIndex(index)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? "bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]" : "hover:bg-white/70"
                  }`}
                >
                  <h1 className="text-base font-medium leading-tight text-[#20172A]">
                    {item.title}
                  </h1>
                  <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-6 h-[498px] w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentService.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-3xl bg-[#F1F6F9] flex items-center justify-center text-[#20172A]">
                    {React.createElement(currentService.icon, { size: 18 })}
                  </div>

                  <div className="flex flex-col max-w-[260px]">
                    <h1 className="text-lg font-medium text-[#20172A]">
                      {currentService.title}
                    </h1>

                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {currentService.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaServices;
