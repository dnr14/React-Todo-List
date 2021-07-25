import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyledMain, MainInput, FillerButton, StyledModal, StyledModalFooter, StyledModalContainer } from "./styled";
import { encrypt, decrypt } from "../helpers/cryto";
import Item from "./Item";

let isEnter = false;
const BTNS = ["ALL", "DOING", "COMPLETED"];
const ITEM = { text: "", done: false };
const updateSet = new Set();
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const LOCALSTORAGE_NAME = process.env.REACT_APP_LOCALSTORAGE_TODOLIST_NAME;

const getInitialValue = () => {
  let id = 0;
  let deCodedArray = decrypt(localStorage.getItem(LOCALSTORAGE_NAME), SECRET_KEY);
  localStorage.hasOwnProperty(LOCALSTORAGE_NAME) ? (id = deCodedArray.length === 0 ? 0 : deCodedArray[deCodedArray.length - 1].id + 1) : (id = 0);
  return id;
};
const makeLocalStorage = () => localStorage.setItem(LOCALSTORAGE_NAME, []);
const getDecodedArray = () => {
  let decodedArray;
  localStorage.hasOwnProperty(LOCALSTORAGE_NAME)
    ? (decodedArray = decrypt(localStorage.getItem(LOCALSTORAGE_NAME), SECRET_KEY))
    : (decodedArray = []);
  return decodedArray;
};

const Main = () => {
  const firstDecodedArray = useMemo(() => getDecodedArray(), []);
  const initialValue = useMemo(() => getInitialValue(), []);
  const [todoArray, setTodoArray] = useState(firstDecodedArray);
  const [filter, setFilter] = useState(BTNS[0]);
  const [isListFull, setIsListFull] = useState(false);
  const mainInputRef = useRef();
  const nextId = useRef(initialValue);

  useEffect(() => {
    if (!localStorage.hasOwnProperty(LOCALSTORAGE_NAME)) {
      makeLocalStorage();
    }
    window.addEventListener("beforeunload", () => {
      const encodedArray = encrypt(todoArray, SECRET_KEY);
      localStorage.setItem(LOCALSTORAGE_NAME, encodedArray);
    });
  }, [todoArray]);

  const enterHandler = (e) => {
    const { key } = e;
    if (key === "Enter") {
      const { value } = mainInputRef.current;

      if (value === "" || value === " ") return;

      if (todoArray.length === 10) {
        mainInputRef.current.blur();
        setIsListFull(true);
        return;
      }

      if (!isEnter) {
        isEnter = !isEnter;
        setTodoArray([...todoArray, { ...ITEM, id: nextId.current++, text: value }]);
        setTimeout(() => (isEnter = false), 500);
        mainInputRef.current.value = "";
      } else {
        mainInputRef.current.blur();
        setIsListFull(true);
      }
    }
  };

  const handlClickUpdate = (btn) => () => {
    updateSet.forEach((id) => setTodoArray((prevArray) => prevArray.map((item) => (item.id === id ? { ...item, done: !item.done } : item))));
    updateSet.clear();
    setFilter(btn);
  };

  return (
    <StyledMain>
      <StyledModal isListFull={isListFull}>
        <StyledModalContainer isListFull={isListFull}>
          <div className="flex-box">
            {isEnter ? (
              <span>너무 빠릅니다.</span>
            ) : (
              <>
                <span>ToDoList가 꽉 찼습니다.</span>
                <span>최대 10개</span>
              </>
            )}
          </div>
          <StyledModalFooter>
            <button onClick={() => setIsListFull(false)}>확인</button>
          </StyledModalFooter>
        </StyledModalContainer>
      </StyledModal>

      <MainInput type="text" ref={mainInputRef} onKeyPress={enterHandler} maxLength="20" placeholder="네가 해야 할 일 을 적어 봐!! 😁" />
      <div>
        {BTNS.map((btn, idx) => (
          <FillerButton key={idx} onClick={handlClickUpdate(btn)} isSelected={btn === filter}>
            {btn}
          </FillerButton>
        ))}
      </div>
      <div>
        {todoArray
          .filter((item) => (filter === BTNS[0] ? item : filter === BTNS[1] ? !item.done : item.done))
          .map((item, idx) => (
            <Item idx={idx} key={item.id} {...item} updateSet={updateSet} handlClickUpdate={handlClickUpdate(filter)} setTodoArray={setTodoArray} />
          ))}
      </div>
    </StyledMain>
  );
};

export default Main;
