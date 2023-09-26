import Button from "./Button";
import Input from "./Input";
import styles from "./App.css";
import React, { useEffect } from "react";

// App1 클래스 컴포넌트를 App 함수형 컴포넌트로 수정하기
// Button 컴포넌트 별도로 만들어서 import
function App() {
  let [counter, setCounter] = React.useState(0);
  let [name, setName] = React.useState("");

  const onClick = () => {
    // console.log('click');
    setCounter(counter + 1);
  }
  
  const onChange = (event) => {
    setName(event.target.value);
  }
  
  console.log("rendered!!");
  
  const callOnce = () => {
    console.log("call once only!!!");
  }
  
  useEffect(callOnce, []); // 생성시 한 번만 호출
  useEffect(() => console.log("state가 변경됨"), [counter]); // state가 변경될 때마다 호출
  useEffect(() => console.log("페이지가 렌더링됨"), [counter]); // ui가 render될 때마다 변경될 때마다 호출
  useEffect(() => console.log(`input 태그의 값이 ${name} 으로 변경됨`), [name]);

  return (
    <div>
      <h1>Function Component</h1>
      <p>{counter} Clicked</p>
      <Button text="Click!" onClick={onClick}/>
      <Input text={name} onChange={onChange}/>
    </div>
  );
}

export default App;
