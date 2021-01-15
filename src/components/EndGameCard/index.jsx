import { Link } from "react-router-dom";
import endGameImg from "../../assets/winners.svg";

import * as S from "./styles";

const EndGameCard = ({ score }) => {
  return (
    <S.Wrapper>
      <h1>Country Quiz</h1>
      <S.Content>
        <img src={endGameImg} alt="winners" />

        <h1>Results</h1>

        <p>
          You got <span>{score}</span> correct answers.
        </p>

        <S.TryAgainButton>
          <Link to="/">Try again</Link>
        </S.TryAgainButton>
      </S.Content>
    </S.Wrapper>
  );
};

export default EndGameCard;
