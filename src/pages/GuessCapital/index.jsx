import BaseQuizGame from "../../components/BaseQuizGame";
import { getDataForGuessCapital } from "../../services/api";

const GuessCapital = () => {
  return <BaseQuizGame apiFunction={getDataForGuessCapital} />;
};

export default GuessCapital;
