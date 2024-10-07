import React from "react";
import styled from "styled-components";
import userAvatar from "../../assets/user.png";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <ConversationWrapper
        $isSelected={isSelected} 
        onClick={() => setSelectedConversation(conversation)}
      >
        <AvatarWrapper $isOnline={isOnline}> 
          <AvatarImage src={conversation.profilePic || userAvatar} alt="" />
        </AvatarWrapper>

        <ConversationDetails>
          <Username>{conversation.username}</Username>
          <p>{conversation.email}</p>
            <p className="onlinePara" >{ isOnline ? "online" : null }</p>
        </ConversationDetails>
      </ConversationWrapper>

      {!lastIndex && <Divider />}
    </>
  );
};

export default Conversation;

const ConversationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#0ea5e9" : "transparent")};
  border-radius: 0.375rem;
  &:hover {
    background-color: #3b82f6;
  }
  .onlinePara{
    opacity: 1;
    color: black;
    font-weight: bolder;
    position: absolute;
    top: 0;
    right: 10px;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => (props.$isOnline ? "#34D399" : "transparent")};
    border-radius: 50%;
    bottom: 0;
    right: 0;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ConversationDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const Username = styled.p`
  font-weight: bold;
  color: #1e293b;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 0;
  padding: 0;
`;
