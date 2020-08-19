import React, { useState } from "react";
import {
  Container,
  Title,
  MainImage,
  Button,
  QuizQuestion,
  AnswerContainer,
  Answer,
  ResultParagraph,
  ResultTitle,
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
      <QuizQuestion>{question}</QuizQuestion>
      <AnswerContainer>
        <Answer>{answer1}</Answer>
        <Answer>{answer2}</Answer>
        <Answer>{answer3}</Answer>
      </AnswerContainer>
      <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
        {buttonText}
      </Button>
    </Container>
  );

  const correctAnswer = 3;

  const Result = () => {
    switch (correctAnswer) {
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
      {currentQuestionIndex >= 5 && Result()}
    </Container>
  );
};
