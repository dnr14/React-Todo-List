import React, { useRef, useState } from "react";
import { StyledItem } from "./styled";
import { AiTwotoneDelete } from "react-icons/ai";
import { ItemObject } from "../types/types";

type ItemProps = {
  idx: number;
  text: string;
  done: boolean;
  id: number;
  updateSet: Set<number>;
  setTodoArray: (v: React.SetStateAction<ItemObject[]>) => void;
  handlClickUpdate: () => void;
};

let timer: any = null;

const Item = ({
  idx,
  text,
  done,
  id,
  updateSet,
  setTodoArray,
  handlClickUpdate,
}: ItemProps) => {
  const labelChecked = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(done);

  const handleToggle = () => {
    const { current } = labelChecked;
    if (current) {
      updateSet.add(id);
      setIsChecked(current.checked);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => handlClickUpdate(), 500);
    }
  };

  const handleItemRemove = () =>
    setTodoArray((prevArray) =>
      prevArray.filter((item) => item.id !== id && item)
    );

  return (
    <StyledItem isDone={isChecked}>
      <label>
        {idx + 1}.
        <input
          type="checkbox"
          onChange={handleToggle}
          defaultChecked={done}
          ref={labelChecked}
          readOnly
        />
        <span>{text}</span>
      </label>
      <AiTwotoneDelete onClick={handleItemRemove} />
    </StyledItem>
  );
};

export default Item;
