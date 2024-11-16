import React from "react";
import userAvatar from "../../assets/user.png";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const messageFromMe = message.senderId === authUser._id;
  const profilePic = messageFromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const formattedTime = formatTime(message.createdAt);

  return (
    <div
      className={`flex items-start mb-4 relative ${
        messageFromMe ? "justify-end" : "justify-start"
      }`}
    >
      {/* Timestamp at the start only if the message is from me */}
      {messageFromMe && (
        <div className="text-xs text-gray-600 opacity-70 flex items-center mr-2">
          {formattedTime}
        </div>
      )}

      {/* User avatar for received messages */}
      {!messageFromMe && (
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img
            src={profilePic || userAvatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`max-w-[75%] p-3 rounded-lg ${
          messageFromMe
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {message.message}
      </div>

      {/* User avatar for sent messages */}
      {messageFromMe && (
        <div className="w-10 h-10 rounded-full overflow-hidden ml-3">
          <img
            src={profilePic || userAvatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Timestamp at the end for received messages */}
      {!messageFromMe && (
        <div className="text-xs text-gray-600 opacity-70 flex items-center ml-2">
          {formattedTime}
        </div>
      )}
    </div>
  );
};

export default Message;
