import styled, { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const SIZE = {
  mobile: 512,
  tab: 768,
};

const mobile = () => `@media only screen and (max-width: ${SIZE.mobile}px)`;
const tab = () => `@media only screen and (max-width: ${SIZE.tab}px)`;
const colorWhite = () => `#fff`;
const colorBrandSaturationFull = () => `rgba(46, 204, 113, 1)`;
const colorBrandSaturationHalf = () => `rgba(46, 204, 113, 0.5)`;
const justifyAlign: JustifyAlignFn = (justify, align) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html{
    ${mobile}{
      font-size: 20px;
    }
  }

  body {
    line-height: 1.5;
    font-family: 'Ubuntu Mono', monospace;
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
  ${justifyAlign("unset", "center")}
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
  background-color: ${colorWhite};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  min-width: 360px;
  ${tab} {
    width: 80%;
  }
  ${mobile} {
    margin-top: 0;
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  text-align: center;
  padding: 20px 10px 5px 10px;
  background-color: ${colorBrandSaturationFull};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: ${colorWhite};

  ${tab} {
    font-size: 1.5rem;
    & > span {
      width: 100%;
    }
  }
`;

export const HeaderWrap = styled.header`
  width: 100%;
  background-color: ${colorBrandSaturationFull};
  ${justifyAlign("unset", "unset")}
  flex-direction: column;

  & > div:nth-child(2) {
    margin-left: 45px;
    padding: 5px 0px 10px 0px;
    ${tab} {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const DateContent = styled.span<{ isBold: boolean }>`
  font-weight: ${({ isBold }) => isBold && `900`};
  font-size: 1rem;
  & + & {
    margin-left: 10px;
  }

  ${tab} {
    font-size: 0.7rem;
  }
`;

export const MainWrap = styled.main`
  width: 100%;
  padding: 10px;

  & > div:nth-child(n + 2) {
    margin-top: 10px;
  }
`;

export const MainInput = styled.input`
  width: 100%;
  padding: 5px 5px 5px 15px;
  line-height: 1.5rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid #333;

  ${tab} {
    font-size: 0.8rem;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

export const ItemWrap = styled.div<{ isDone: boolean }>`
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
    }

    & > span:first-child {
      display: inline-block;
      width: 25px;
      margin: 0;
      text-align: center;
      font-weight: 900;
    }
    & > span:last-child {
      text-decoration: ${({ isDone }) => isDone && "line-through"};
    }

    &:hover {
      background-color: ${colorBrandSaturationHalf};

      & > span:last-child {
        text-decoration: line-through;
      }
    }
  }
`;

export const FillerButton = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  border: 1px solid #333;
  padding: 2px 5px;
  background-color: ${colorWhite};
  border-radius: 2px;
  font-size: 0.9rem;
  & + & {
    margin-left: 5px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${colorBrandSaturationFull};
      color: ${colorWhite};
      font-weight: 900;
      border-color: ${colorBrandSaturationFull};
    `};
`;

export const ModalWrap = styled.div<{ visible: boolean }>`
  position: fixed;
  background-color: rgba(149, 165, 166, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `};
`;

export const ModalInnerWrap = styled.div<{ visible: boolean }>`
  width: 300px;
  height: 120px;
  min-width: 200px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: transform 1s ease-in;
  transform: translateY(300px);

  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(150px);
    `};

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
export const ModalFooter = styled.footer`
  background-color: transparent;
  padding: 10px;
  position: absolute;
  bottom: 0;
  ${justifyAlign("center", "unset")}

  & > button {
    padding: 5px 10px;
    background-color: ${colorBrandSaturationFull};
    cursor: pointer;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    color: ${colorWhite};
    &:hover {
      background-color: ${colorBrandSaturationHalf};
    }
  }
`;

// 애니메이션
// const fadeIn = keyframes`
//   from{
//     opacity:0;
//   }

//   to{
//     opacity:1;
//   }
// `;

// const fadeOut = keyframes`
//   from{
//     opacity:1;
//   }

//   to{
//     opacity:0;
//   }
// `;

// const slideUp = keyframes`
//   from{
//     transform:translateY(300px);
//   }
//   to{
//     transform:translateY(150px);
//   }
// `;
// const slideDown = keyframes`
//   from{
//     transform:translateY(300px);
//   }
//   to{
//     transform:translateY(150px);
//   }
// `;
