import styled from "styled-components";

export const Container = styled.header`
  background-color: #325d79;
  border-bottom: 10px solid #efeeee;
`;

export const Title = styled.h1`
  margin: 30px 0 0;
  padding: 20px 20px 0px;
  color: #efeeee;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0 20px 20px 0;
  text-align: right;
  font-size: 20px;
  color: #efeeee;

  @media (max-width: 525px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
