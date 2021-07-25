import React, { useRef, useState } from "react";
import { StyledItem } from "./styled";
import { AiTwotoneDelete } from "react-icons/ai";

let timer = null;

const Item = ({ idx, text, done, id, updateSet, setTodoArray, handlClickUpdate }) => {
  const labelChecked = useRef();
  const [isChecked, setIsChecked] = useState(done);

  const handleToggle = () => {
    updateSet.add(id);
    setIsChecked(labelChecked.current.checked);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => handlClickUpdate(), 500);
  };

  const handleItemRemove = () => setTodoArray((prevArray) => prevArray.filter((item) => item.id !== id && item));

  return (
    <StyledItem isDone={isChecked}>
      <label>
        {idx + 1}.
        <input type="checkbox" onChange={handleToggle} defaultChecked={done} ref={labelChecked} readOnly />
        <span>{text}</span>
      </label>
      <AiTwotoneDelete onClick={handleItemRemove} />
    </StyledItem>
  );
};

export default Item;
