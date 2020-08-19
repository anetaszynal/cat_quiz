import styled from "styled-components";

export const Container = styled.footer`
  background-color: #325d79;
  border-top: 10px solid #efeeee;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: #efeeee;
  font-size: 22px;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const Adress = styled.address`
  padding: 10px 20px 0px 30px;
  color: #efeeee;
  font-size: 12px;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0px 20px 10px 0px;
  color: #efeeee;
  font-size: 10px;
  text-align: right;
`;
