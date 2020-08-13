import styled from "styled-components";

export const Container = styled.header`
  background-color: rgb(84, 76, 74);
  box-shadow: 0px 0px 4px 1px rgb(84, 76, 74);
  border-bottom: 10px solid rgb(236 229 199 / 88%);
`;

export const Title = styled.h1`
  margin: 30px 0 0;
  padding: 20px 20px 0px;
  color: rgb(249, 246, 225);

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0 20px 20px 0;
  text-align: right;
  font-size: 20px;
  color: rgb(236, 229, 199);

  @media (max-width: 525px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
