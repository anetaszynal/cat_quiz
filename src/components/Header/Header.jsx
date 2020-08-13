import React from "react";
import { Container, Title, Paragraph } from "./styled";

export const Header = ({ title, additionalContent }) => (
  <Container>
    <Title>{title}</Title>
    <Paragraph>{additionalContent}</Paragraph>
  </Container>
);
