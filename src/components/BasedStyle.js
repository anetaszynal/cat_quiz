import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: #efeeee;
  font-size: 28px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const MainImage = styled.img`
  max-width: 60%;
  margin: 20px;
  justify-self: center;
  border-radius: 10px;
`;

export const Container = styled.article`
  background-color: #f26627;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Button = styled.button`
  min-width: 30%;
  margin: 10px 30px 20px;
  padding: 5px;
  border: none;
  border-radius: 30px;
  background-color: #efeeee;
  color: #f26627;
  font-size: 20px;
  font-weight: bold;
  justify-self: right;
  box-shadow: 2px 2px 0px 2px #d4d4d4;

  &:hover {
    background-color: white;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }

  &:disabled {
    background-color: #eee;
  }
`;

export const ResultContainer = styled.section`
  border-top: 10px solid #efeeee;
`;

export const ResultTitle = styled.h3`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: #efeeee;
  font-size: 20px;
`;

export const ResultParagraph = styled.p`
  margin: 0;
  padding: 30px;
  color: #efeeee;
  font-size: 15px;
  text-align: justify;
`;
