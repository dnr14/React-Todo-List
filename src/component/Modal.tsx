import React, { useEffect, useRef, useState } from "react";
import { ModalWrap, ModalInnerWrap } from "./styled";

type ModalProps = {
  isOpne: boolean;
  delay: number;
  children: React.ReactNode;
  setIsOpne: (p: React.SetStateAction<boolean>) => void;
  render: (p: () => void) => JSX.Element;
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
        <ModalWrap visible={visible}>
          <ModalInnerWrap visible={visible}>
            {children}
            {render(close)}
          </ModalInnerWrap>
        </ModalWrap>
      )}
    </>
  );
};

export default Modal;
