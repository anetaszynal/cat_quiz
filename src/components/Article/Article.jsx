import React, { useState } from "react";
import {
  Container,
  Title,
  MainImage,
  Button,
  QuizField,
  Answer,
} from "./styled";
import { questions } from "../../lib/questions";

export const Article = () => {
  const [welcome, setWelcome] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const CurrentQuiz = ({
    title,
    imageURL,
    question,
    answer1,
    answer2,
    answer3,
    buttonText,
  }) => (
    <Container>
      <Title>{title}</Title>
      <MainImage src={imageURL} alt="" />
      <QuizField>{question}</QuizField>
      <Answer>{answer1}</Answer>
      <Answer>{answer2}</Answer>
      <Answer>{answer3}</Answer>
      <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
        {buttonText}
      </Button>
    </Container>
  );

  return (
    <Container>
      {welcome && (
        <>
          {" "}
          <Title>Start</Title>
          <MainImage
            src={require("../../assets/mainImage.jpg")}
            alt=""
          ></MainImage>
          <Button onClick={() => setWelcome(false)}>Rozpocznij Quiz!</Button>
        </>
      )}
      {!welcome && (
        <CurrentQuiz {...questions[currentQuestionIndex]}></CurrentQuiz>
      )}
    </Container>
  );
};
