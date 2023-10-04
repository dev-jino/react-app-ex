import { useState } from "react";

function App_reducer() {
  const [number, setNumber] = useState(0);
  const onClick = (e) => setNumber(parseInt(e.target.value));

  return (
    <div>
      <h2>useReducer Test</h2>
      <p>숫자 10씩 변경</p>
      <input type="number"
        value={number}
        onChange={onClick}
        step="10" />
      <button>up</button>
      <button>down</button>
    </div>
  );
}

export default App_reducer;
