import React, { useState } from "react";
import {
  Container,
  Title,
  MainImage,
  Button,
  QuizQuestion,
  AnswerContainer,
  Answer,
  ResultContainer,
  ResultParagraph,
  ResultTitle,
} from "./styled";
import { questions } from "../../lib/questions";

export const Article = () => {
  const [welcome, setWelcome] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chooseCorrectAnswer, setChooseCorrectAnswer] = useState(false);
  const [chooseBadAnswer, setChooseBadAnswer] = useState(false);
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

  const CurrentQuiz = ({ imageURL, question, answers, correctAnswer }) => (
    <Container>
      <Title>Pytanie {currentQuestionIndex + 1}</Title>
      <MainImage src={imageURL} alt="" />
      <QuizQuestion>{question}</QuizQuestion>
      <AnswerContainer>
        {answers.map((answer) => (
          <Answer
            onClick={() => {
              if (answer === correctAnswer) {
                setChooseCorrectAnswer(true);
                setCountCorrectAnswer(countCorrectAnswer + 1);
              } else {
                setChooseBadAnswer(true);
              }
            }}
            disabled={chooseBadAnswer || chooseCorrectAnswer}
          >
            {answer}
          </Answer>
        ))}
      </AnswerContainer>
      <Button
        onClick={() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setChooseCorrectAnswer(false);
          setChooseBadAnswer(false);
        }}
      >
        {currentQuestionIndex < 4 ? "Następne pytanie" : "Zakończ Quiz"}
      </Button>
    </Container>
  );

  const Result = () => {
    switch (countCorrectAnswer) {
      case 0:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/sadCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Niestety, uzyskałeś 0 prawidłowych odpowiedzi. Przed ponownym
              przystąpieniem do Quizu, zanurz się w cudownym świecie kotów.{" "}
            </ResultParagraph>
          </>
        );
      case 1:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/sadCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Niestety, uzyskałeś tylko 1 prawidłową odpowiedź. Co powstrzymuje
              Cię przed zanurzeniem w ten cudowny świat naszych małych
              przyjaciół? Nie czekaj! Poznaj je jeszcze raz.{" "}
            </ResultParagraph>
          </>
        );
      case 2:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/littleSadCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Uzyskałeś 2 prawidłowe odpowiedzi. To już dobry początek! Czym
              jeszcze zaskoczą Cię te cudowne maluchy?
            </ResultParagraph>
          </>
        );
      case 3:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/littleSadCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Uzyskałeś 3 prawidłowe odpowiedzi. To już dobry początek! Czym
              jeszcze zaskoczą Cię te cudowne maluchy?
            </ResultParagraph>
          </>
        );
      case 4:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/happyCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Brawo!! Uzyskałeś 4 prawidłowe odpowiedzi. Naprawdę dobrze znasz
              małe futrzaste zwierzątka. Czy jest coś czym jeszcze mogłyby Cię
              one zaskoczyć ?
            </ResultParagraph>
          </>
        );
      case 5:
        return (
          <>
            <Title>Koniec</Title>
            <MainImage
              src={require("../../assets/happyCat.jpg")}
              alt=""
            ></MainImage>
            <ResultTitle>
              Świat Kotów jest taki ciekawy. Weź ponowny udział w Quizie by
              dowiedzieć się jeszcze więcej!
            </ResultTitle>
            <ResultParagraph>
              Brawo!! Prawidłowo odpowiedziałeś na wszystkie pytania. Naprawdę
              dobrze znasz małe futrzaste zwierzątka. Czy jest coś czym jeszcze
              mogłyby Cię one zaskoczyć ?
            </ResultParagraph>
          </>
        );
    }
  };

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
        <CurrentQuiz {...questions[currentQuestionIndex]}></CurrentQuiz>
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
      {currentQuestionIndex >= 5 && Result()}
    </Container>
  );
};
