import React from "react";
import { StyledHeader, StyleSpan } from "./styled";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const toDay = new Date();

const get_YYDDMMDAY = () => {
  const toDayMap = new Map();
  toDayMap.set("YYYY", toDay.getFullYear());
  toDayMap.set("MM", toDay.getMonth() + 1);
  toDayMap.set("DD", toDay.getDate());
  toDayMap.set("DAY", DAYS[toDay.getDay()]);

  return toDayMap;
};

const Header = () => {
  const toDayMap = get_YYDDMMDAY();
  return (
    <StyledHeader>
      <div>
        <StyleSpan isBold>{toDayMap.get("YYYY")}년</StyleSpan>
        <StyleSpan isBold>{toDayMap.get("MM")}월</StyleSpan>
        <StyleSpan isBold>{toDayMap.get("DD")}일</StyleSpan>
        <StyleSpan isBold>{toDayMap.get("DAY")}요일😀</StyleSpan>
      </div>
    </StyledHeader>
  );
};

export default Header;
