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

export const StartButton = styled.button`
  color: black;
  background-color: #f9a826;
  font-size: 2rem;
  border-radius: 1.2rem;
  padding: 2rem 4rem;
  cursor: pointer;
  border: 0;
`;
