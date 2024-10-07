import React from "react";
import styled from "styled-components";
import Sidebar from "../component/sidebar/Sidebar";
import MessageContainer from "../component/messages/MessageContainer";

const HomeContainer = styled.div`
  display: flex;
  height: 450px; 
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #e5e7eb;

  @media (min-width: 640px) {
    height: 450px; 
  }

  @media (min-width: 768px) {
    height: 550px; 
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <MessageContainer />
    </HomeContainer>
  );
};

export default Home;
