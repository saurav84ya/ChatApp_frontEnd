import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLogin from "../hooks/useLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 24rem;
  margin: auto;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #e5e7eb;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  text-align: center;
  color: #374151;
`;

const Label = styled.label`
  padding: 0.5rem 0;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`;

const SignupLink = styled(Link)`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
    color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #1d4ed8;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  &:disabled {
    background-color: #94a3b8;
  }
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Title>
          Login to <span style={{ color: "#3b82f6" }}>Chat Application</span>
        </Title>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>
              <span>Email</span>
            </Label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label>
              <span>Password</span>
            </Label>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <SignupLink to={"/signup"}>
            {"Don't"} have an account?
          </SignupLink>
          <div>
            <SubmitButton disabled={loading}>
              {loading ? <LoadingSpinner /> : "Login"}
            </SubmitButton>
          </div>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
