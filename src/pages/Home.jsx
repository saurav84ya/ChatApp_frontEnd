import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import MessageContainer from "../component/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-auto w-auto md:h-[550px] rounded-lg overflow-hidden bg-gray-200">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
