import React from "react";
import { Container, Title, Adress, Paragraph } from "./styled";

export const Footer = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Adress>
      Aneta Szynal
      <br />
      anetaszynal28@gmail.com
    </Adress>
    <Paragraph>Copyright &copy; Aneta Szynal</Paragraph>
  </Container>
);
