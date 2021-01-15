import BaseQuizGame from "../../components/BaseQuizGame";
import { getDataForGuessCountry } from "../../services/api";

const GuessCountry = () => {
  return <BaseQuizGame apiFunction={getDataForGuessCountry} />;
};

export default GuessCountry;
