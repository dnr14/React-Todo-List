import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
    box-sizing: border-box;
  
  }
  html{
    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
  }


  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;

   
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }


`;

export default GlobalStyle;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  border: 1px solid #333;
  margin-top: 100px;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  min-width: 360px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 512px) {
    margin-top: 0;
  }
`;

export const Title = styled.div`
  line-height: 3.125rem;
  font-size: 2.5rem;
  text-align: center;
  padding: 20px 10px 5px 10px;
  background-color: #2ecc71;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  @media only screen and (max-width: 768px) {
    & > span {
      display: inline-block;
      width: 100%;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2ecc71;

  & > div {
    &:nth-child(2) {
      margin-left: 45px;
      padding: 5px 0px 10px 0px;
      @media only screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;

type StyleSpanProps = {
  isBold: boolean;
};

export const StyleSpan = styled.span<StyleSpanProps>`
  font-weight: ${({ isBold }) => isBold && `900`};
  font-size: 1rem;

  & + & {
    margin-left: 10px;
  }
`;

export const StyledMain = styled.div`
  width: 100%;
  padding: 10px;

  & > div {
    &:nth-child(n + 2) {
      margin-top: 10px;
    }
  }
`;

export const MainInput = styled.input`
  width: 100%;
  padding: 5px 5px 5px 15px;
  line-height: 1.5rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid #333;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TodoList = styled.div`
  margin-top: 10px;
`;

type StyledItemProps = {
  isDone: boolean;
};

export const StyledItem = styled.div<StyledItemProps>`
  position: relative;
  & + & {
    margin-top: 5px;
  }

  & > svg {
    display: none;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &:active {
      filter: invert(59%) sepia(85%) saturate(388%) hue-rotate(93deg)
        brightness(95%) contrast(88%);
    }
  }

  &:hover {
    & > svg {
      display: block;
    }
  }

  label {
    display: block;
    cursor: pointer;
    padding-left: 10px;

    & > input {
      vertical-align: middle;
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    & > span {
      vertical-align: middle;
      margin-left: 5px;
      text-decoration: ${({ isDone }) => isDone && "line-through"};
    }

    &:hover {
      background-color: rgba(46, 204, 113, 0.5);

      & > span {
        text-decoration: line-through;
      }
    }
  }
`;

interface FillerButtonProps {
  isSelected: boolean;
}

export const FillerButton = styled.button<FillerButtonProps>`
  border: 1px solid #333;
  cursor: pointer;
  padding: 2px 5px;
  background-color: white;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #2ecc71;
    `};

  border-radius: 2px;
  & + & {
    margin-left: 5px;
  }
`;

// 애니메이션
const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity:1;
  }

  to{
    opacity:0;
  }
`;

const slideUp = keyframes`
  from{
    transform:translateY(300px);
  }
  to{
    transform:translateY(150px);
  }
`;

type StyledModalProps = {
  isListFull: boolean;
};

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  background-color: rgba(149, 165, 166, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  visibility: ${({ isListFull }) => !isListFull && "hidden"};
  z-index: 1;

  ${({ isListFull }) =>
    !isListFull &&
    css`
      animation-name: ${fadeOut};
    `}
`;

export const StyledModalContainer = styled.div<StyledModalProps>`
  width: 300px;
  height: 130px;
  min-width: 200px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 5px 5px 5px rgba(149, 165, 166, 0.5);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ isListFull }) =>
    isListFull &&
    css`
      animation-name: ${slideUp};
    `}

  & > div {
    position: absolute;
    top: 30px;
    right: 0;
    left: 0;
    width: 90%;
    margin: auto;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    & > span {
      display: block;
    }
  }
`;
export const StyledModalFooter = styled.footer`
  background-color: transparent;
  padding: 10px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  & > button {
    padding: 2.5px 10px;
    background-color: rgba(46, 204, 113, 0.5);
    cursor: pointer;
    border: none;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    &:hover {
      background-color: transparent;
      border: 2px solid rgba(46, 204, 113, 1);
      color: #000;
    }
  }
`;
