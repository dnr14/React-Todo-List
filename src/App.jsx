import Header from "./component/Header";
import Main from "./component/Main";
import TodoListWrapper from "./component/TodoListWrapper";

function App() {
  return (
    <TodoListWrapper>
      <Header />
      <Main />
    </TodoListWrapper>
  );
}

export default App;
