import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import styled from "styled-components";


const App = () => {
  const { authUser } = useAuthContext();

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
