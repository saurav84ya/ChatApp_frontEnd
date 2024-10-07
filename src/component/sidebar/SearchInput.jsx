import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import styled from "styled-components";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  outline: none;
  width: 100%;
  &:focus {
    border-color: #38bdf8;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0ea5e9;
  color: white;
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0284c7;
  }
`;

const Icon = styled(IoSearchSharp)`
  width: 1.5rem;
  height: 1.5rem;
  outline: none;
`;

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    const conversation = conversations.find((conversation) =>
      conversation.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found with this username");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">
        <Icon />
      </Button>
    </Form>
  );
};

export default SearchInput;
