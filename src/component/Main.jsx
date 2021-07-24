import React, { useRef, useState } from "react";
import { StyledMain, MainInput, FillerButton, StyledModal, StyledModalFooter, StyledModalContainer } from "./styled";
import Item from "./Item";

let isEnter = false;
const FILLTER_BTNS = ["ALL", "DOING", "COMPLETED"];
const ITEM = { text: "", done: false };
const updateSet = new Set();

const Main = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState(FILLTER_BTNS[0]);
  const [isListFull, setIsListFull] = useState(false);
  const mainInputRef = useRef();
  const nextId = useRef(0);

  const enterHandler = (e) => {
    const { key } = e;
    if (key === "Enter") {
      const { value } = mainInputRef.current;
      if (value === "" || value === " ") return;

      if (todoArray.length > 2) {
        setIsListFull(true);
        // alert("계획이 너무 많습니다.");
        return;
      }

      if (!isEnter) {
        isEnter = !isEnter;
        setTodoArray((prevArray) => [...prevArray, { ...ITEM, id: nextId.current, text: value }]);
        nextId.current++;
        mainInputRef.current.value = "";

        setTimeout(() => (isEnter = false), 500);
      } else {
        alert("너무빨라");
      }
    }
  };

  const handlClickUpdate = (btn) => () => {
    updateSet.forEach((id) => setTodoArray((prevArray) => prevArray.map((item) => (item.id === id ? { ...item, done: !item.done } : item))));
    updateSet.clear();
    setFilter(btn);
  };

  // 모달창 꾸미기 끝내기
  // 해야할일 로컬 스토리지

  return (
    <StyledMain>
      <StyledModal>
        <StyledModalContainer>
          <div className="flex-box">
            <span>ToDoList가 꽉 찼습니다.</span>
            <span>최대 10개</span>
          </div>
          <StyledModalFooter>
            <button>확인</button>
          </StyledModalFooter>
        </StyledModalContainer>
      </StyledModal>
      <MainInput type="text" ref={mainInputRef} onKeyPress={enterHandler} maxLength="20" placeholder="네가 해야 할 일 을 적어 봐!! 😁" />
      <div>
        {FILLTER_BTNS.map((btn, idx) => (
          <FillerButton key={idx} onClick={handlClickUpdate(btn)} isSelected={btn === filter}>
            {btn}
          </FillerButton>
        ))}
      </div>
      <div>
        {todoArray
          .filter((item) => (filter === "ALL" ? item : filter === "DOING" ? !item.done : item.done))
          .map((item) => (
            <Item handlClickUpdate={handlClickUpdate(filter)} updateSet={updateSet} item={item} key={item.id} {...item} setTodoArray={setTodoArray} />
          ))}
      </div>
    </StyledMain>
  );
};

export default Main;
