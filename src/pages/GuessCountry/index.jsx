import { useState } from "react";
import { getDataForGuessCountry } from "../../services/api";
import QuestionCard from "../../components/QuestionCard";
import EndGameCard from "../../components/EndGameCard";

import * as S from "./styles";

const GuessCountry = () => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  async function getQuestions() {
    let questions = await getDataForGuessCountry();
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
        <button onClick={getQuestions}>Start</button>
      )}
      {questions.length > 0 && !isGameOver && (
        <QuestionCard
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          correct_answer={questions[questionNumber].correct_answer}
          flag={questions[questionNumber].flag}
          userAnswer={userAnswer}
          checkAnswer={checkAnswer}
          getNextQuestion={getNextQuestion}
        />
      )}
      {isGameOver && <EndGameCard score={score} />}
    </S.Wrapper>
  );
};

export default GuessCountry;
