import styled from "styled-components";

import background from "../../images/background-view.jpg";

export const Wrapper = styled.section`
  background-image: url(${background});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  background: white;
  width: 80%;
  height: 600px;
  margin: auto;
  display: flex;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;

  img {
    border: 5px solid #e6e6e6;
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

export const Information = styled.div`
  width: 30%;
  text-align: center;
  margin: auto 30px;

  h2 {
    margin: 25px 0;
    font-size: 25px;
  }
  p {
    font-size: 18px;
  }
`;

export const InformationRepository = styled.div`
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    img {
      margin: 25px 10px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 25px;
  background: #003f8c;
  font-weight: 600;
  color: white;
  border: none;
  font-size: 18px;
`;

export const Repository = styled.div``;
