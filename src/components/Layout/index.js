import React from "react";
import CustomStatusBar from "../CustomStatusbar";
import Header from "../Header";
import { Wrapper, Container } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <CustomStatusBar />
      <Wrapper>
        <Header />
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}
