import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PagesLinks } from "./components/PagesLinks";
import { PagesRouter } from "./routes/PagesRouter";
import { Header } from "./components/Header";
import styled from "styled-components";

function App() {
  const Wrapper = styled.section`
    max-width: 1275px;
    margin: 0 auto 0 auto;
    background-color: rgb(241, 241, 241);
  `;
  const Container = styled.section`
    display: flex;
  `;
  return (
    <BrowserRouter>
      <>
        <Header />
        <Wrapper>
          <Container>
            <PagesLinks />
            <PagesRouter />
          </Container>
        </Wrapper>
      </>
    </BrowserRouter>
  );
}

export default App;
