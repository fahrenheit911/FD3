import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PagesLinks } from "./components/PagesLinks";
import { PagesRouter } from "./routes/PagesRouter";
import { Header } from "./components/Header";
import styled from "styled-components";
import { store } from "./redux/store";

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
            <Provider store={store}>
              <PagesLinks />
              <PagesRouter />
            </Provider>
          </Container>
        </Wrapper>
      </>
    </BrowserRouter>
  );
}

export default App;
