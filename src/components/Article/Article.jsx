import React, { useState } from "react";
import {
  Container,
  Title,
  MainImage,
  Button,
  ResultContainer,
  ResultParagraph,
  ResultTitle,
} from "../BasedStyle";
import { questions } from "../../lib/questions";
import { Result } from "../Result";
import { CurrentQuiz } from "../CurrentQuiz";

export const Article = ({
  currentQuestionIndex,
  chooseCorrectAnswer,
  chooseBadAnswer,
  countCorrectAnswer,
  showAnswer,
  changeQuestion,
}) => {
  const [welcome, setWelcome] = useState(true);

  return (
    <Container>
      {welcome && (
        <>
          <Title>Start</Title>
          <MainImage
            src={require("../../assets/mainImage.jpg")}
            alt=""
          ></MainImage>
          <Button onClick={() => setWelcome(false)}>Rozpocznij Quiz!</Button>
        </>
      )}
      {!welcome && currentQuestionIndex < 5 && (
        <CurrentQuiz
          currentQuestionIndex={currentQuestionIndex}
          showAnswer={showAnswer}
          chooseBadAnswer={chooseBadAnswer}
          chooseCorrectAnswer={chooseCorrectAnswer}
          changeQuestion={changeQuestion}
          {...questions[currentQuestionIndex]}
        ></CurrentQuiz>
      )}
      {(chooseCorrectAnswer || chooseBadAnswer) && (
        <ResultContainer>
          {chooseCorrectAnswer && <ResultTitle>Dobrze!</ResultTitle>}
          {chooseBadAnswer && <ResultTitle>Otóż nie!</ResultTitle>}
          <ResultParagraph>
            {questions[currentQuestionIndex].quriosity}
          </ResultParagraph>
        </ResultContainer>
      )}
      {currentQuestionIndex >= 5 && Result(countCorrectAnswer)}
    </Container>
  );
};
