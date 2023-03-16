import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import TodoHome from "./component/TodoHome";
// import AddTodos from "./component/AddTodos";
import Home from "./component/Home";
// import EditTodo from "./component/EditTodo";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route exact path='/addtodo'>
          <AddTodos />
        </Route> */}

        {/* <Route exact path="/todohome" >
          <TodoHome />
        </Route> */}

        {/* <Route exact path="/edittodo/:toid">
          <EditTodo />
        </Route> */}

      </Router>
    </>
  );
}

export default App;
