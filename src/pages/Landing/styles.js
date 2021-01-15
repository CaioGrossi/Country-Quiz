import styled from "styled-components";

import bgImg from "../../assets/background.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgImg});
`;

export const Content = styled.main`
  width: 57rem;
  height: 46rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > h1 {
    text-align: center;
    font-size: 3rem;
  }
`;

export const GameOptionButton = styled.button`
  background-color: #f9a826;
  border: 0.4rem solid #ebcb31;
  border-radius: 2rem;
  width: 60%;
  padding: 1.2rem;
  font-size: 2rem;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: #ebcb31;
  }
`;
