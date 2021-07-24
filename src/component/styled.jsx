import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    margin-left: 45px;
    padding: 5px 0px 10px 0px;

    @media only screen and (max-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const StyleSpan = styled.span`
  font-weight: ${({ isBold }) => isBold && `900`};
  font-size: 1rem;

  & + & {
    margin-left: 10px;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
    &:last-child {
      margin: 0;
    }
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

export const StyledItem = styled.div`
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
      filter: invert(59%) sepia(85%) saturate(388%) hue-rotate(93deg) brightness(95%) contrast(88%);
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

    & > input {
      vertical-align: middle;
      width: 20px;
      height: 20px;
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

export const FillerButton = styled.button`
  border: 1px solid #333;
  cursor: pointer;
  padding: 2px 5px;
  background-color: ${({ isSelected }) => (isSelected ? "#2ecc71" : "white")};
  border-radius: 2px;
  & + & {
    margin-left: 5px;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  background-color: rgba(149, 165, 166, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const StyledModalContainer = styled.div`
  width: 300px;
  height: 150px;
  min-width: 200px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  box-shadow: 5px 5px 5px rgba(149, 165, 166, 0.5);
  .flex-box {
    position: absolute;
    top: 50px;
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
export const StyledModalFooter = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 10px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
