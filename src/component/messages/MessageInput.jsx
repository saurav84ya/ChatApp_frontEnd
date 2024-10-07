import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import styled from "styled-components";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) {
      return;
    }

    await sendMessage(message);
    setMessage("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <InputField
          type="text"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton type="submit">
          {loading ? <Spinner /> : <BsSend />}
        </SubmitButton>
      </InputWrapper>
    </FormContainer>
  );
};

export default MessageInput;

const FormContainer = styled.form`
  padding: 1rem;
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.input`
  border: 1px solid #4b5563; 
  background-color: #374151;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.5rem; 
  padding: 0.625rem;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.75rem; 
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
