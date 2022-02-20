import Header from "./component/Header";
import Main from "./component/Main";
import { Wrapper } from "./component/styled";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
