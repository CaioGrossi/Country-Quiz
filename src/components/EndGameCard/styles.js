import styled from "styled-components";

export const Wrapper = styled.main`
  width: 47rem;
  height: 57.5rem;
  margin: auto;

  > h1 {
    font-size: 3.6rem;
    color: white;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 2.5rem;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 4rem;

  > p {
    font-size: 2.4rem;
    font-weight: bold;
  }

  > h1 {
    color: #1d355d;
    font-size: 3rem;
  }

  span {
    color: #7fffd4;
  }
`;

export const TryAgainButton = styled.button`
  width: 20rem;
  height: 6rem;
  text-align: center;
  border-radius: 1.2rem;
  border: 0.2rem solid #1d355d;

  > a {
    text-decoration: none;
    font-size: 2rem;
    color: black;
  }
`;
