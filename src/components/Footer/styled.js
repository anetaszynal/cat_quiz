import styled from "styled-components";

export const Container = styled.footer`
  background-color: rgb(84, 76, 74);
  box-shadow: 0px 0px 4px 1px rgb(84, 76, 74);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: rgb(249, 246, 225);
  font-size: 22px;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const Adress = styled.address`
  padding: 10px 20px 0px 30px;
  color: rgb(249, 246, 225);
  font-size: 12px;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0px 20px 10px 0px;
  color: rgb(249, 246, 225);
  font-size: 10px;
  text-align: right;
`;
