import styled from "styled-components";

export const Container = styled.article`
  background-color: #f26627;
  display: grid;
  grid-template-columns: 1fr;
`;

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
`;

export const Button = styled.button`
  min-width: 40%;
  margin: 10px 30px 20px;
  padding: 10px;
  border: none;
  border-radius: 55%;
  background-color: #efeeee;
  color: #f26627;
  font-size: 20px;
  font-weight: bold;
  justify-self: right;

  &:hover {
    background-color: white;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const QuizQuestion = styled.div`
  width: 80%;
  margin: 0 0 20px;
  padding: 10px;
  justify-self: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #efeeee;
  color: #f26627;
`;

export const AnswerContainer = styled.div`
  width: 80%;
  margin: 0 0 20px;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Answer = styled.button`
  padding: 10px;
  background-color: #325d79;
  color: #efeeee;

  &:hover {
    background-color: #2b7bad;
  }
`;
