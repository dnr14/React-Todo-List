import React, { useEffect, useRef, useState } from "react";
import { StyledModal, StyledModalContainer } from "./styled";

type ModalProps = {
  isOpne: boolean;
  delay: number;
  children: React.ReactNode;
  setIsOpne: (p: React.SetStateAction<boolean>) => void;
  render: (p: () => void) => React.ReactNode;
};

const Modal = ({ isOpne, delay, setIsOpne, render, children }: ModalProps) => {
  const triggerRef = useRef<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpne) {
      triggerRef.current = true;
      setVisible(true);
    }
  }, [isOpne]);

  useEffect(() => {
    const { current } = triggerRef;
    if (!visible && current === true) {
      setTimeout(() => {
        triggerRef.current = false;
        setIsOpne((Prev) => !Prev);
      }, delay);
    }
  }, [visible, setIsOpne, delay]);

  const close = () => setVisible(false);

  return (
    <>
      {isOpne && (
        <StyledModal visible={visible}>
          <StyledModalContainer visible={visible}>
            {children}
            {render(close)}
          </StyledModalContainer>
        </StyledModal>
      )}
    </>
  );
};
// const StyledModal = styled.div<{ visible: boolean }>`
//   position: absolute;
//   opacity: 0;
//   transform: translateY(0px);
//   transition: transform 2s ease-in, opacity 1s ease-in;
//   ${({ visible }) => {
//     return (
//       visible &&
//       css`
//         opacity: 1;
//         transform: translateY(-100px);
//       `
//     );
//   }};
//   ${({ visible }) =>
//     !visible &&
//     css`
//       transition: transform 1s ease-in, opacity 1s ease-in;
//     `}
// `;

export default Modal;
