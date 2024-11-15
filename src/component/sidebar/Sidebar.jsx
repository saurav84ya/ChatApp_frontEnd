import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Coversations from "./Coversations";
import LogoutButton from "./LogoutButton";
import graphImage from '../../assets/graph.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      {isMobile && (
        <div
        className="bg-cover bg-center h-[50px] w-[50px] bg-green-300 p-2
         fixed top-[45%] left-[0%] z-50 rounded-full shadow-lg
          flex items-center justify-center text-black"
      >
        <button
          onClick={toggleSidebar}
        >
          {!isOpen ? <i className="ri-menu-line text-[29px]"></i> :<i className="ri-close-large-line text-[29px]"></i>}
        </button>
        </div>
      )}

      {/* Sidebar Container */}
      <div
        className={`${
          isMobile
            ? `fixed top-0 left-0 h-full w-auto z-10  bg-white shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "border-r border-gray-300 p-4 w-auto"
        }`}
      >
        <SearchInput />
        <div className="border-b border-gray-300 mb-4"></div>
        <Coversations />
        <LogoutButton />
      </div>
    </>
  );
};

export default Sidebar;

