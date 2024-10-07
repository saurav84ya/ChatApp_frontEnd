import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  }, [messages]);

  return (
    <MessagesContainer>
      {!loading && messages.length === 0 && (
        <EmptyMessageText>Start conversation by sending a message</EmptyMessageText>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <MessageWrapper key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </MessageWrapper>
        ))}
    </MessagesContainer>
  );
};

export default Messages;

const MessagesContainer = styled.div`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const EmptyMessageText = styled.p`
  text-align: center;
  color: #4b5563;
`;

const MessageWrapper = styled.div`
  margin-bottom: 1rem;
`;
