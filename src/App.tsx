import React from "react";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import styled from "styled-components";
import Player from "./components/Player";
import Routes from "src/routes";
import {
  BrowserRouter as Router,
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const Content = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Player />
        <Sidebar />
        <Content>
          <Header></Header>
          <Routes />
        </Content>
      </Router>
    </Container>
  );
}

export default App;
