import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    try {
      setLoading(true);

      // Fetch request with Authorization header
      const res = await fetch(
        `https://chatapp-backend-lbyl.onrender.com/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem('Token')}`, // Include the token
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Add the new message to the existing messages
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
