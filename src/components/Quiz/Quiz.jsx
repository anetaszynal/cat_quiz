import React, { useState, useEffect } from "react";
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
import { QuizQuestions } from "../QuizQuestions";
import { useQuiz } from "../../lib/useQuiz";

let newQuestions = [];
const getRandomQuestions = (questions) => {
  for (let i = 0; i < 5; i++) {
    newQuestions.push(questions[Math.floor(Math.random() * questions.length)]);
    newQuestions.sort((a, b) => a.id - b.id);
  }
  areEqual();
};

const areEqual = () => {
  if (
    +newQuestions[0].id === +newQuestions[1].id ||
    +newQuestions[1].id === +newQuestions[2].id ||
    +newQuestions[2].id === +newQuestions[3].id ||
    +newQuestions[3].id === +newQuestions[4].id
  ) {
    newQuestions = [];
    getRandomQuestions(questions);
  } else {
    return;
  }
};

export const Quiz = () => {
  const [welcome, setWelcome] = useState(true);
  const {
    currentQuestionIndex,
    chooseCorrectAnswer,
    chooseBadAnswer,
    countCorrectAnswer,
    changeQuestion,
    showAnswer,
  } = useQuiz();

  useEffect(() => {
    getRandomQuestions(questions);
  }, []);

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
        <QuizQuestions
          currentQuestionIndex={currentQuestionIndex}
          showAnswer={showAnswer}
          chooseBadAnswer={chooseBadAnswer}
          chooseCorrectAnswer={chooseCorrectAnswer}
          changeQuestion={changeQuestion}
          {...newQuestions[currentQuestionIndex]}
        ></QuizQuestions>
      )}
      {(chooseCorrectAnswer || chooseBadAnswer) && (
        <ResultContainer>
          {chooseCorrectAnswer && <ResultTitle>Dobrze!</ResultTitle>}
          {chooseBadAnswer && (
            <>
              <ResultTitle>{`Otóż nie!`}</ResultTitle>
              <ResultParagraph>
                {`Prawidłową odpowiedzią jest odpowiedź: ${newQuestions[currentQuestionIndex].correctAnswer}`}
              </ResultParagraph>
            </>
          )}
          <ResultParagraph>
            {newQuestions[currentQuestionIndex].quriosity}
          </ResultParagraph>
        </ResultContainer>
      )}
      {currentQuestionIndex >= 5 && Result(countCorrectAnswer)}
    </Container>
  );
};
