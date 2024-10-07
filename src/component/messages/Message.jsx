import React from "react";
import styled from "styled-components";
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
    <ChatContainer messageFromMe={messageFromMe}>
      <ChatImage>
        <Avatar src={profilePic || userAvatar} alt="User Avatar" />
      </ChatImage>

      <ChatBubble messageFromMe={messageFromMe}>
        {message.message}
      </ChatBubble>

      <ChatFooter>
        {formattedTime}
      </ChatFooter>
    </ChatContainer>
  );
};

export default Message;

const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.messageFromMe ? "flex-end" : "flex-start")};
  margin-bottom: 1rem;
`;

const ChatImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.75rem;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChatBubble = styled.div`
  background-color: ${(props) => (props.messageFromMe ? "#38A169" : "#E2E8F0")};
  color: ${(props) => (props.messageFromMe ? "white" : "black")};
  padding: 0.75rem;
  border-radius: 0.5rem;
  max-width: 75%;
  word-wrap: break-word;
`;

const ChatFooter = styled.div`
  opacity: 0.5;
  font-size: 0.75rem;
  color: #1E293B;
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
