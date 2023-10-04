import APP_ACTION_TYPES from "./APP_ACTION_TYPES";

function App_todo_reducer({todo, dispatch}) {
    return (
        <div>
            <span>{todo}</span>
            <button onClick={() => dispatch({type : APP_ACTION_TYPES.del})}>삭제</button>
        </div>
    );
}

export default App_todo_reducer;