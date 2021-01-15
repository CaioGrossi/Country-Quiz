import BaseQuizGame from "../../components/BaseQuizGame";
import { getDataForGuessPopulation } from "../../services/api";

const GuessPopulation = () => {
  return <BaseQuizGame apiFunction={getDataForGuessPopulation} />;
};

export default GuessPopulation;
