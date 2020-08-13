import React from "react";
import { Container, Title, MainImage, Button } from "./styled";

export const Article = ({ title, buttonText, imageURL }) => (
  <Container>
    <Title>{title}</Title>
    <MainImage src={imageURL} alt=""></MainImage>
    <Button>{buttonText}</Button>
  </Container>
);
