import APP_ACTION_TYPES from './APP_ACTION_TYPES';

const App_todo = ({todo, dispatch, id, isFinished}) => {
    return (
        <div>
            <span style={
                {
                    textDecoration : isFinished ? 'line-through' : 'none',
                    color : isFinished ? 'gray' : 'black'
                }
            }
            onClick = {() => 
                dispatch({type:APP_ACTION_TYPES.finish, payload : {id}})
            }
            >{todo}</span>
            <button onClick={() =>
                dispatch({type:APP_ACTION_TYPES.del, payload : {id}})
            }>삭제</button>
        </div>
    )
}
export default App_todo;