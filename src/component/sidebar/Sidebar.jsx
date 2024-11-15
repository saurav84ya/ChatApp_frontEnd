import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Coversations from "./Coversations";
import LogoutButton from "./LogoutButton";

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
        <button
          onClick={toggleSidebar}
          className="fixed bottom-[5%] left-[45%] z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg"
        >
          {!isOpen ? <i className="ri-menu-line text-[29px]"></i> :<i className="ri-close-large-line text-[29px]"></i>}
        </button>
      )}

      {/* Sidebar Container */}
      <div
        className={`${
          isMobile
            ? `fixed top-0 left-0 h-full w-auto z-10  bg-white shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "border-r border-gray-300 p-4 w-64"
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
