import React from 'react';
import TodoList from "./TodoList"
// import { Query } from 'react-apollo';
// import {GET_NOTES} from "./queris";
function App() {
  return (
    <div>
    <TodoList />
  {/* <Query query={GET_NOTES}>{() => null}</Query> */}
    </div>
  );
}

export default App;
