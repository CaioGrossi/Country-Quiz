import styled, { css } from "styled-components";

const answerModifier = {
  correct: () => css`
    background-color: #60bf88;

    &:hover {
      background-color: #60bf88;
    }
  `,

  incorrect: () => css`
    background-color: #ea8282;

    &:hover {
      background-color: #ea8282;
    }
  `,
};

export const Wrapper = styled.main`
  width: 47rem;
  height: 57.5rem;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -2rem;
  align-items: center;
  padding: 0 1rem;

  > h1 {
    font-size: 3.6rem;
    color: white;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 4rem;

  > p {
    font-size: 2.4rem;
    font-weight: bold;
  }

  > img {
    max-width: 20rem;
    max-height: 14rem;
    width: auto;
    height: auto;
  }
`;

export const AnswersOptions = styled.button`
  ${({ correct, wasClicked, answered }) => css`
    width: 40rem;
    height: 5.6rem;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 1.2rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #f9a826;
    }
    ${answered && correct && answerModifier.correct()}
    ${wasClicked && !correct && answerModifier.incorrect()}
  `}
`;

export const NextQuestionButton = styled.button`
  width: 11.6rem;
  height: 5.6rem;
  align-self: flex-end;

  background-color: #f9a826;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  border-radius: 1.2rem;
  border: none;

  cursor: pointer;
`;
