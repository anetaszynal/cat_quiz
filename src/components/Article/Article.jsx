import React from "react";
import { Container, Title, MainImage, Button } from "./styled";

export const Article = () => (
  <Container>
    <Title>Start!</Title>
    <MainImage src={require("../../assets/mainImage.jpg")} alt=""></MainImage>
    <Button>Rozpocznij Quiz!</Button>
  </Container>
);
