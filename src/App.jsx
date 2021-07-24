import Header from "./component/Header";
import Main from "./component/Main";
import { Wrapper, Title } from "./component/styled";

function App() {
  return (
    <Wrapper>
      <Title>
        <span>어제보다 </span>
        <span>한 걸음 더 👍</span>
      </Title>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
