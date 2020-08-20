import React from "react";
import { Container, Title, MainImage, Button } from "../BasedStyle";
import { Question, AnswerContainer, Answer } from "./styled";

export const CurrentQuiz = ({
  imageURL,
  question,
  answers,
  correctAnswer,
  currentQuestionIndex,
  showAnswer,
  chooseBadAnswer,
  chooseCorrectAnswer,
  changeQuestion,
}) => {
  return (
    <Container>
      <Title>Pytanie {currentQuestionIndex + 1}</Title>
      <MainImage src={imageURL} alt="" />
      <Question>{question}</Question>
      <AnswerContainer>
        {answers.map((answer, index) => (
          <Answer
            onClick={() => showAnswer(answer, correctAnswer)}
            disabled={chooseBadAnswer || chooseCorrectAnswer}
            key={index}
          >
            {answer}
          </Answer>
        ))}
      </AnswerContainer>
      <Button
        disabled={!(chooseBadAnswer || chooseCorrectAnswer)}
        onClick={() => changeQuestion()}
      >
        {currentQuestionIndex < 4 ? "Następne pytanie" : "Zakończ Quiz"}
      </Button>
    </Container>
  );
};
