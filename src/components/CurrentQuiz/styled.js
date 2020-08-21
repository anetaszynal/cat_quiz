import styled from "styled-components";

export const Question = styled.div`
  width: 80%;
  margin: 0 0 20px;
  padding: 10px;
  justify-self: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #efeeee;
  color: #f26627;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px #111111;
`;

export const AnswerContainer = styled.div`
  width: 80%;
  margin: 0 0 20px;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Answer = styled.button`
  padding: 10px;
  background-color: #325d79;
  color: #efeeee;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 0px #111111;

  &:hover {
    background-color: #2b7bad;
  }
`;
