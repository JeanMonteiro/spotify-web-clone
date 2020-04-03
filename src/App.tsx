import React from "react";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";

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
    <Container id="containerPai">
      <GlobalStyle />
      <Footer />
      <Sidebar />
      <Content id="miolo">
        <Header></Header>
        <p>miolo</p>
      </Content>
    </Container>
  );
}

export default App;
