import React, { useRef, useState } from "react";
import { ItemWrap } from "./styled";
import { AiTwotoneDelete } from "react-icons/ai";

type ItemProps = {
  idx: number;
  text: string;
  done: boolean;
  id: number;
  updateSet: Set<number>;
  setTodoArray: (v: React.SetStateAction<Item[]>) => void;
  handlClickUpdate: () => void;
};

let timer: ThrottlingType = null;

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
    <ItemWrap isDone={isChecked}>
      <label>
        <span>{idx + 1}.</span>
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
    </ItemWrap>
  );
};

export default Item;
