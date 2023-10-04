import { useState, useReducer } from "react";
import APP_ACTION_TYPES from "./APP_ACTION_TYPES";
import App_todo from "./App_todo";

// reducer => 복잡한 state를 관리
// dispatch => reducer에게 state 관리를 요구
// action => 요구하는 내용
//           type, payload를 포함한 객체
// action의 타입을 const로 등록하여 더 깔끔하게 정리

const reducer = (state, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.add :
      const newTodo = {
        id : Date.now(),
        todo : action.payload.todo,
        completed : false
      }
      return {
        count : state.count + 1,
        todoList : [...state.todoList, newTodo]
      };

    case APP_ACTION_TYPES.del :
      return {
        count : state.count - 1,
        todoList : state.todoList.filter(element =>
          element.id !== action.payload.id)
      };

    case APP_ACTION_TYPES.completed :
      return state;
    default :
      return state;
  }
}

const initialState = {
  count : 0,
  todoList : []
}

function App_reducer_complex() {
  const [todo, setTodo] = useState("");
  const [todoListInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>TodoList - reducer</h2>
      <p>총 todolist 수 : {todoListInfo.count}</p>
      <input type="text"
            value={todo}
            onChange={ (e) => { setTodo(e.target.value); } }
            placeholder="할 일을 입력해주세요." />
      <button onClick={ () => {dispatch({
          type : APP_ACTION_TYPES.add, 
          payload : {todo}
        });
      }
      }>ADD</button>
      {todoListInfo.todoList.map(element => {
        return (
          <App_todo
            key = {element.id}
            todo = {element.todo}
            dispatch = {dispatch} 
            id = {element.id}  
          />
        );
      })}
    </div>
  );
}

export default App_reducer_complex;
