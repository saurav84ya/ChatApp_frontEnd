import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const apiUrl = "https://chatapp-backend-lbyl.onrender.com";

  
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${apiUrl}/api/messages/${selectedConversation._id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('Token')}`,
          },
        });

        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]); // Updated dependency array

  return { messages, loading };
};

export default useGetMessages;
