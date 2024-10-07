import React from "react";
import { BiLogOut } from "react-icons/bi";
import styled from "styled-components";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <ButtonWrapper>
      {!loading ? (
        <LogoutIcon onClick={logout} />
      ) : (
        <Spinner />
      )}
    </ButtonWrapper>
  );
};

export default LogoutButton;

const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

const LogoutIcon = styled(BiLogOut)`
  width: 1.5rem;
  height: 1.5rem;
  color: #ef4444;
  cursor: pointer;
`;

const Spinner = styled.span`
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
