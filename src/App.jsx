import Header from "./component/Header";
import Main from "./component/Main";
import { Wrapper } from "./component/styled";

function App() {
  // const testObj = {
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  // localStorage.setItem("object", JSON.stringify(testObj));

  // const object = localStorage.getItem("object");

  // for (const key in localStorage) {
  //   if (Object.hasOwnProperty.call(localStorage, key)) {
  //     if (localStorage.hasOwnProperty("DetailArray")) {
  //       console.log("DetailArray");
  //       localStorage.removeItem("DetailArray");
  //       console.log(localStorage);
  //     }
  //   }
  // }

  // console.log(localStorage);
  // console.log(localStorage.key(1));

  // console.log(object);

  // localStorage.setItem("object", "데이터 바꿨습니다.");
  // console.log(localStorage.getItem("object"));

  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
