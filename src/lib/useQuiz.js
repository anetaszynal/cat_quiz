import { useState } from "react";

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chooseCorrectAnswer, setChooseCorrectAnswer] = useState(false);
  const [chooseBadAnswer, setChooseBadAnswer] = useState(false);
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

  const changeQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setChooseCorrectAnswer(false);
    setChooseBadAnswer(false);
  };

  const showAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setChooseCorrectAnswer(true);
      setCountCorrectAnswer(countCorrectAnswer + 1);
    } else {
      setChooseBadAnswer(true);
    }
  };

  return {
    currentQuestionIndex,
    chooseCorrectAnswer,
    chooseBadAnswer,
    countCorrectAnswer,
    changeQuestion,
    showAnswer,
  };
};
