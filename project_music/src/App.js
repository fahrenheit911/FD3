import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { PagesLinks } from "./components/PagesLinks";
import { PagesRouter } from "./routes/PagesRouter";

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>Enjoy Music</h1>
        <PagesLinks />
        <PagesRouter />
      </>
    </BrowserRouter>
  );
}

export default App;
