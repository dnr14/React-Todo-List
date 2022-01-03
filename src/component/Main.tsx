import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  StyledMain,
  MainInput,
  FillerButton,
  StyledModalFooter,
} from "./styled";
import { encrypt, decrypt } from "../helpers/cryto";
import { getItem, hasKeys, setItem } from "../helpers/storageUtils";
import { OnKeyEvent, ItemObject } from "../types/types";
import Item from "./Item";
import Modal from "./Modal";

const BTNS: string[] = ["ALL", "DONING", "COMPLETED"];
const ITEM: ItemObject = { id: 0, text: "", done: false };
const updateSet = new Set<number>();
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "";
const LOCALSTORAGE_NAME =
  process.env.REACT_APP_LOCALSTORAGE_TODOLIST_NAME || "";

const getInitialValue = (): number => {
  let id: number = 0;
  if (localStorage.hasOwnProperty(LOCALSTORAGE_NAME)) {
    const txet = getItem(LOCALSTORAGE_NAME);
    const deCodedArray = decrypt(txet, SECRET_KEY);
    id = deCodedArray.length + 1;
  }
  return id;
};

const getDecodedArray = () => {
  const text = getItem(LOCALSTORAGE_NAME);
  const decodedArray = hasKeys(LOCALSTORAGE_NAME)
    ? decrypt(text, SECRET_KEY)
    : [];
  return decodedArray;
};

const Main = () => {
  const firstDecodedArray = useMemo<ItemObject[]>(() => getDecodedArray(), []);
  const initialValue = useMemo<number>(() => getInitialValue(), []);
  const [todoArray, setTodoArray] = useState<ItemObject[]>(firstDecodedArray);
  const [filter, setFilter] = useState<string>(BTNS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const mainInputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef<number>(initialValue);
  const isEnter = useRef<boolean>(false);

  const makeLocalStorage = useCallback(
    () => setItem(LOCALSTORAGE_NAME, JSON.stringify([])),
    []
  );

  useEffect(() => {
    // 로컬스토리지에 없다면 초기값 []로 세팅
    if (!hasKeys(LOCALSTORAGE_NAME)) {
      makeLocalStorage();
    }
    const handleBeforeUnload = () => {
      const encodedArray = encrypt(todoArray, SECRET_KEY);
      setItem(LOCALSTORAGE_NAME, encodedArray);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
  }, [todoArray, makeLocalStorage]);

  const enterHandler = (e: OnKeyEvent) => {
    const { key } = e;
    const { current } = mainInputRef;
    if (current && key === "Enter") {
      const { value } = current;
      if (value === "" || value === " ") return;

      if (todoArray.length === 10) {
        current.blur();
        setIsOpen(true);
        return;
      }

      if (!isEnter.current) {
        isEnter.current = true;
        setTodoArray((prevArray) => [
          ...prevArray,
          { ...ITEM, id: nextId.current++, text: value },
        ]);
        setTimeout(() => (isEnter.current = false), 500);
        current.value = "";
        return;
      }

      current.blur();
      setIsOpen(true);
    }
  };

  const handlClickUpdate = (btn: string) => () => {
    updateSet.forEach((id) =>
      setTodoArray((prevArray) =>
        prevArray.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
      )
    );
    updateSet.clear();
    setFilter(btn);
  };

  const close = useCallback(
    (cb: () => void): React.ReactNode => (
      <StyledModalFooter>
        <button onClick={() => cb()}>확인</button>
      </StyledModalFooter>
    ),
    []
  );

  return (
    <>
      <StyledMain>
        <Modal
          isOpne={isOpen}
          delay={2000}
          render={close}
          setIsOpne={setIsOpen}
        >
          <div className="flex-box">
            {isEnter.current ? (
              <span>너무 빠릅니다.</span>
            ) : (
              <>
                <span>ToDoList가 꽉 찼습니다.</span>
                <span>최대 10개</span>
              </>
            )}
          </div>
        </Modal>
        <MainInput
          type="text"
          ref={mainInputRef}
          onKeyPress={enterHandler}
          placeholder="네가 해야 할 일 을 적어 봐!! 😁"
          maxLength={20}
        />
        <div>
          {BTNS.map((btn, idx) => (
            <FillerButton
              key={idx}
              onClick={handlClickUpdate(btn)}
              isSelected={btn === filter}
            >
              {btn}
            </FillerButton>
          ))}
        </div>
        <div>
          {todoArray
            .filter((item) =>
              filter === BTNS[0]
                ? item
                : filter === BTNS[1]
                ? !item.done
                : item.done
            )
            .map((item, idx) => (
              <Item
                idx={idx}
                {...item}
                key={item.id}
                updateSet={updateSet}
                handlClickUpdate={handlClickUpdate(filter)}
                setTodoArray={setTodoArray}
              />
            ))}
        </div>
      </StyledMain>
    </>
  );
};

export default Main;
