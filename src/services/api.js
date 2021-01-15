import { shuffleArray } from "../utils/shuffleArray";

async function getDataForGuessCapital() {
  let data = await (await fetch("https://restcountries.eu/rest/v2/all")).json();

  let shuffledArray = shuffleArray(data);
  let countrysData = shuffledArray.slice(0, 20);
  countrysData.push({});

  let questions = [];

  for (let i = 0; i <= 16; i += 4) {
    let currentCountrys = countrysData.slice(i, i + 4);
    let selectedCountry = currentCountrys[Math.floor(Math.random() * 4)];

    let question = `${selectedCountry.capital} is the capital of:`;
    let correct_answer = selectedCountry.name;
    let answers = currentCountrys.map((country) => country.name);

    questions.push({
      question,
      correct_answer,
      answers,
    });
  }

  return questions;
}

async function getDataForGuessCountry() {
  let data = await (await fetch("https://restcountries.eu/rest/v2/all")).json();

  let shuffledArray = shuffleArray(data);
  let countrysData = shuffledArray.slice(0, 20);
  countrysData.push({});

  let questions = [];

  for (let i = 0; i <= 16; i += 4) {
    let currentCountrys = countrysData.slice(i, i + 4);
    let selectedCountry = currentCountrys[Math.floor(Math.random() * 4)];

    let question = "Wich country does this flag belongs to?";
    let correct_answer = selectedCountry.name;
    let answers = currentCountrys.map((country) => country.name);
    let flag = selectedCountry.flag;

    questions.push({
      question,
      correct_answer,
      answers,
      flag,
    });
  }

  return questions;
}

export { getDataForGuessCapital, getDataForGuessCountry };
