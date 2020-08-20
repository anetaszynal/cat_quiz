import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { useQuiz } from "./useQuiz";

function App() {
  const {
    currentQuestionIndex,
    chooseCorrectAnswer,
    chooseBadAnswer,
    countCorrectAnswer,
    changeQuestion,
    showAnswer,
  } = useQuiz();
  return (
    <div>
      <Header
        title="Quiz o kotach"
        additionalContent="- weź udział i sprawdź swoją wiedzę."
      />
      <Article
        currentQuestionIndex={currentQuestionIndex}
        chooseCorrectAnswer={chooseCorrectAnswer}
        chooseBadAnswer={chooseBadAnswer}
        countCorrectAnswer={countCorrectAnswer}
        changeQuestion={changeQuestion}
        showAnswer={showAnswer}
      />
      <Footer title="Kontakt:" />
    </div>
  );
}

export default App;
