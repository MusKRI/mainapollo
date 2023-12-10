/* eslint-disable react-hooks/exhaustive-deps */
// **** Library Imports ****
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// **** Local Imports ****

const LinkWithChildren = ({ label, childLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen, isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen, isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (window && ref && ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className="flex items-center justify-center relative" ref={ref}>
      <div
        className="group flex items-center justify-center text-main-text"
        onClick={toggleMenu}
      >
        <span>{label}</span>
        <BiChevronDown className="h-4 w-4 group-hover:translate-y-[1px] transition-transform" />
      </div>

      {isOpen && childLinks.length > 0 && (
        <motion.div className="absolute border top-full mt-2 left-0 w-max bg-white shadow-md py-4 px-6 rounded-md z-10 flex flex-col gap-1 overflow-hidden">
          {childLinks.map((link) => {
            const { id, label, slug } = link;
            return (
              <Link
                to={slug}
                key={id}
                onClick={closeMenu}
                className="group flex items-center gap-4 text-main-text hover:text-green transition-all"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {label}
                </span>
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default LinkWithChildren;
