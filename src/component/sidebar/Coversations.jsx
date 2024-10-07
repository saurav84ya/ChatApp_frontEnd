import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const ConversationsContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const LoadingSpinner = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Coversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <ConversationsContainer>
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

      {loading && <LoadingSpinner />}
    </ConversationsContainer>
  );
};

export default Coversations;
