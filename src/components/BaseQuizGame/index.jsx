import { useState } from "react";
import QuestionCard from "../QuestionCard";
import EndGameCard from "../EndGameCard";

import * as S from "./styles";

const BaseQuizGame = ({ apiFunction }) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  async function getQuestions() {
    let questions = await apiFunction();
    setQuestions(questions);
  }

  function getNextQuestion() {
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === 5) {
      setIsGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
      setUserAnswer("");
    }
  }

  function checkAnswer(event) {
    const answer = event.currentTarget.value;
    const correct_answer = questions[questionNumber].correct_answer;

    if (answer === correct_answer) {
      const nextScore = score + 1;
      setScore(nextScore);
    }

    setUserAnswer(answer);
  }

  return (
    <S.Wrapper>
      {(questions.length === 0) & !isGameOver && (
        <S.StartButton onClick={getQuestions}>Start</S.StartButton>
      )}
      {questions.length > 0 && !isGameOver && (
        <QuestionCard
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          correct_answer={questions[questionNumber].correct_answer}
          userAnswer={userAnswer}
          flag={
            !!questions[questionNumber].flag
              ? questions[questionNumber].flag
              : undefined
          }
          checkAnswer={checkAnswer}
          getNextQuestion={getNextQuestion}
        />
      )}
      {isGameOver && <EndGameCard score={score} />}
    </S.Wrapper>
  );
};

export default BaseQuizGame;
