import { Link } from "react-router-dom";

import * as S from "./styles";

const Landing = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <h1>Country quiz</h1>

        <S.GameOptionButton>
          <Link to="/guess-country">Guess country by flag</Link>
        </S.GameOptionButton>

        <S.GameOptionButton>
          <Link to="/guess-capital">Guess coutry's capital</Link>
        </S.GameOptionButton>
      </S.Content>
    </S.Wrapper>
  );
};

export default Landing;
