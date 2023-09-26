import Button from "./Button";
import Input from "./Input";
import styles from "./App.css";
import { useState, useEffect } from "react";

function Image() {
  // function destroyFunc() {
  //   console.log("이미지가 소멸됨");

  // }

  // function createFunc() {
  //   console.log("이미지가 생성됨");
  //   destroyFunc();
  // }
  
  // useEffect(createFunc, []);
  
  useEffect(function () {
      console.log("이미지가 생성됨");
      return function () {
        console.log("이미지가 소멸됨");
      }
  }, []);

  return (
    <img src="favicon.ico"></img>
  )
}

// 버튼이 눌릴때마다 이미지가 나타나고, 사라지도록 토글 구현
function App2() {
  let [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(cur => !cur);
  }

  return (
    <div>
      <h1>Function Component</h1>
      
      {toggle ? <Image /> : null}

      <button onClick={onClick}>{toggle ? "Hide" : "Show" }</button>
    </div>
  );
}

export default App2;
