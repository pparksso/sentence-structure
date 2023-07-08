/* eslint-disable react-refresh/only-export-components */
import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

export const Global = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        color: #333;
    }
    html {
        font-size: 16px;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: normal;
    }
    h1 {
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  background-color: #feffff;
`;

export const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
`;

export const Box = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: 50px 0;
`;

export const TextBox = styled.textarea`
  width: 40%;
  border-radius: 5px;
  height: 30rem;
  padding: 20px;
  border: 1px solid #ddd;
  resize: none;
  outline: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
`;

export const Button = styled.button`
  background: none;
  background-color: #f9d1d9;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: all 0.15s ease-out;
  &:hover {
    background-color: #f29cad;
  }
`;
