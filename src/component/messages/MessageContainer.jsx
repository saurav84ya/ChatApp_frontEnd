import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col relative w-[100vw] h-screen md:h-[100%]  bg-gradient-to-br
      from-blue-100 to-blue-200 rounded-lg shadow-lg md:min-w-[400px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Header selectedConversation={selectedConversation} />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const Header = ({ selectedConversation }) => (
  <div className="flex items-center bg-gray-800 text-white p-4 border-b-2 border-gray-700">
    <div className="flex items-center gap-4">
      <img
        src={selectedConversation?.profilePic}
        alt=""
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-400"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">{selectedConversation?.username}</span>
        <p className="text-sm text-gray-300 mt-1">{selectedConversation?.email}</p>
      </div>
    </div>
  </div>
);

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center text-center gap-4 p-8 text-gray-800 font-semibold text-2xl md:text-3xl">
        <p>Welcome</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-4xl text-blue-500 md:text-5xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
