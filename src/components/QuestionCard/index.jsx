import adventureImg from "../../assets/adventures.svg";

import * as S from "./styles";

const QuestionCard = ({
  question,
  answers,
  correct_answer,
  userAnswer,
  checkAnswer,
  getNextQuestion,
  flag,
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>Country Quiz</h1>
        <img src={adventureImg} alt="traveler guy" />
      </S.Header>

      <S.Content>
        <p>{question}</p>
        {!!flag && <img src={flag} alt="Country's flag" />}
        {answers.map((answer) => (
          <S.AnswersOptions
            key={answer}
            correct={correct_answer === answer}
            wasClicked={userAnswer === answer}
            onClick={checkAnswer}
            value={answer}
            answered={!!userAnswer}
            disabled={!!userAnswer}
          >
            {answer}
          </S.AnswersOptions>
        ))}

        {!!userAnswer && (
          <S.NextQuestionButton onClick={getNextQuestion}>
            Next
          </S.NextQuestionButton>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default QuestionCard;
