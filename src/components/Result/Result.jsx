import React from "react";
import { Title, MainImage, ResultTitle, ResultParagraph } from "../BasedStyle";

export const Result = (countCorrectAnswer) => {
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
            Cię przed zanurzeniem w ten cudowny świat naszych małych przyjaciół?
            Nie czekaj! Poznaj je jeszcze raz.{" "}
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
            małe futrzaste zwierzątka. Czy jest coś czym jeszcze mogłyby Cię one
            zaskoczyć ?
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
    default:
      return;
  }
};
