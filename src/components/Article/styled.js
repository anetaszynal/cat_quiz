import styled from "styled-components";

export const Container = styled.article`
  background-color: rgb(84, 76, 74);
  box-shadow: 0px 0px 4px 1px rgb(84, 76, 74);
  border-bottom: 10px solid rgb(236 229 199 / 88%);
  display: grid;
  grid-template-columns: 1fr;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 20px 0px 30px;
  color: rgb(249, 246, 225);
  font-size: 28px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const MainImage = styled.img`
  max-width: 60%;
  margin: 20px;
  box-shadow: 0px 0px 4px 1px rgb(249, 246, 225);
  border-radius: 2%;
  justify-self: center;
`;

export const Button = styled.button`
  min-width: 40%;
  margin: 10px 30px 20px;
  padding: 5px;
  border: none;
  border-radius: 55%;
  box-shadow: 0px 0px 10px 2px rgb(249, 246, 225);
  background-color: rgb(236, 229, 199);
  color: rgb(84, 76, 74);
  font-size: 20px;
  font-weight: bold;
  justify-self: right;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
