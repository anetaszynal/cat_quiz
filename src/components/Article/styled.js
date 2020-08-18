import styled from "styled-components";

export const Container = styled.article`
  background-color: rgb(84, 76, 74);
  box-shadow: 0px 0px 4px 1px rgb(84, 76, 74);
  display: grid;
  grid-template-columns: 1fr;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: rgb(249, 246, 225);
  font-size: 28px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const MainImage = styled.img`
  max-width: 60%;
  margin: 20px;
  box-shadow: 0px 0px 4px 1px rgb(249, 246, 225);
  border-radius: 2%;
  justify-self: center;
`;

export const Button = styled.button`
  min-width: 40%;
  margin: 10px 30px 20px;
  padding: 5px;
  border: none;
  border-radius: 55%;
  box-shadow: 0px 0px 10px 2px rgb(249, 246, 225);
  background-color: rgb(236, 229, 199);
  color: rgb(84, 76, 74);
  font-size: 20px;
  font-weight: bold;
  justify-self: right;

  &:hover {
    background-color: rgb(254 248 225);
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const QuizQuestion = styled.div`
  width: 80%;
  margin: 0 0 20px;
  padding: 5px;
  box-shadow: 0px 0px 4px 1px rgb(249, 246, 225);
  border-radius: 2%;
  justify-self: center;
  font-size: 20px;
  color: rgb(249, 246, 225);
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
  border: none;
  box-shadow: 0px 0px 4px 1px rgb(249, 246, 225);
  border-radius: 2%;
  background-color: transparent;
  color: rgb(249, 246, 225);

  &:hover {
    background-color: rgb(112 102 99);
  }
`;
