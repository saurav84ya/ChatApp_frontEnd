import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";
import styled from "styled-components";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <Container>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Header>
            <Profile>
              <img src={selectedConversation?.profilePic} alt="" />
              <UserInfo>
                <Username>{selectedConversation?.username}</Username>
                <Email>{selectedConversation?.email}</Email>
              </UserInfo>
            </Profile>
          </Header>

          <Messages />

          <MessageInput />
        </>
      )}
    </Container>
  );
};

const NoChatSelected = () => {
  return (
    <NoChatContainer>
      <TextContainer>
        <p>Welcome</p>
        <p>Select a chat to start messaging</p>
        <StyledIcon />
      </TextContainer>
    </NoChatContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 600px;
  height: 100%;
  background: linear-gradient(135deg, #e0e7ff 0%, #edf2ff 100%);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  @media (max-width:1000px) {
    min-width: 400px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #334155;
  color: #fff;
  padding: 16px;
  border-bottom: 2px solid #1e293b;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #94a3b8;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  color: #f8fafc;
  font-weight: bold;
  font-size: 1.25rem;
`;

const Email = styled.p`
  color: #e2e8f0;
  font-size: 0.875rem;
  margin-top: 4px;
`;

const NoChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 32px;
  color: #1e293b;
  font-weight: 600;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledIcon = styled(TiMessages)`
  font-size: 3rem;
  color: #3b82f6;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export default MessageContainer;
