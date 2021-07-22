import React, { useState } from "react";
import "../scss/Header.scss";

const Header = () => {
  const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = date.getMonth();
  const DD = date.getDate();
  const Day = date.getDay();

  const [second, setSecond] = useState(date.getSeconds());
  console.log(date.getMinutes());
  console.log(date.getHours());

  // 매초 마다 변경이되어서 위에 코드가 다시 생성
  //useMemo를 이용하여 재네들은 재생성안되게 해보자
  // setInterval(() => {
  //   setSecond(new Date().getSeconds());
  // }, 1000);

  return (
    <div className="header">
      <h1>{`${YYYY}년 ${MM + 1}월 ${DD}일 ${DAYS[Day]}요일`}</h1>
      {second}
    </div>
  );
};

export default Header;
