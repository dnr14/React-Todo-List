import React from "react";
import "../scss/TodoListWrapper.scss";
import classNames from "classnames";

const TodoListWrapper = ({ children }) => {
  return <div className={classNames("wrapper")}>{children}</div>;
};

export default TodoListWrapper;
