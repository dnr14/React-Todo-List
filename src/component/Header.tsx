import { StyledHeader, StyleSpan, Title } from "./styled";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const TEXT = ["년", "월", "일", "요일😀"];
const toDay = new Date();

const get_YYDDMMDAY = () => {
  const toDayArray = [];
  toDayArray.push(toDay.getFullYear());
  toDayArray.push(toDay.getMonth() + 1);
  toDayArray.push(toDay.getDate());
  toDayArray.push(DAYS[toDay.getDay()]);

  return toDayArray;
};

const Header = () => {
  const toDayMap = get_YYDDMMDAY();
  return (
    <StyledHeader>
      <Title>
        <span>어제보다 </span>
        <span>한 걸음 더 👍</span>
      </Title>
      <div>
        {toDayMap.map((date, idx) => (
          <StyleSpan isBold key={idx}>{`${date}${TEXT[idx]}`}</StyleSpan>
        ))}
      </div>
    </StyledHeader>
  );
};

export default Header;
