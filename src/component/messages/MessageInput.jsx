import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mb-8"
    >
      <div className="relative bg-red-400 p-2 w-full">
        <input
          type="text"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center text-white hover:text-blue-500"
          disabled={loading}
        >
          {loading ? <Spinner /> : <BsSend size={20} />}
        </button>
      </div>
    </form>
  );
};

const Spinner = () => (
  <div className="w-4 h-4 border-2 border-t-2 border-white border-t-blue-500 rounded-full animate-spin"></div>
);

export default MessageInput;
