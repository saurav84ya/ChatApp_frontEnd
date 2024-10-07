import React from "react";
import SearchInput from "./SearchInput";
import Coversations from "./Coversations";
import LogoutButton from "./LogoutButton";
import styled from "styled-components";

const SidebarContainer = styled.div`
  border-right: 1px solid #64748b;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width : 850px) {
    max-width:350px ;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #e2e8f0; 
  padding: 0 0.75rem;
  
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SearchInput />
      <Divider />

      <Coversations />

      <LogoutButton />
    </SidebarContainer>
  );
};

export default Sidebar;
