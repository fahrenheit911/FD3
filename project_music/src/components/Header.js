import React from "react";
import styled from "styled-components";

export const Header = () => {
  const StyleHeader = styled.section`
    text-align: center;
    padding: 10px;
    margin-bottom: 5px;
    background: rgb(232, 232, 232);
  `;
  return (
    <h1>
      <StyleHeader>Music</StyleHeader>
    </h1>
  );
};
