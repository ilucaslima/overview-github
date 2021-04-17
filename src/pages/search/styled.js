import styled from "styled-components";
import background from "../../images/background.jpg";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;

  img {
    width: 220px;
    padding-top: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  background: #e6e6e6;
  width: 600px;
  height: 250px;
  border-radius: 20px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  width: 300px;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;

  &::placeholder{
    color: ${({error}) => error ? 'red' : '#cdcdcd'};
  }
`;

export const Button = styled.input`
  width: 80px;
  height: 40px;
  background: #1dc519;
  border: none;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
