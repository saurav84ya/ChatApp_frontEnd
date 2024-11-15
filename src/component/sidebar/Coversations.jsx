import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto h-[86%] max-h-[calc(100vh-4rem)]  p-2">
      {Array.isArray(conversations) && conversations.length > 0 ? (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversations.length - 1}
          />
        ))
      ) : (
        <span>No conversations available.</span>
      )}

      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin"></span>
      )}
    </div>
  );
};

export default Conversations;
