import Button from "./Button_without_redux";
import "./App.css";
import { useState } from "react";

function App_without_redux() {
  return (
    <Parent />
  );
}

function Parent() {
  const [color, setColor] = useState("white");
  const style = {
    backgroundColor : color
  }
  return (
    <div>
      <RedContainer setColor={setColor} style={style}/>
      <GreenContainer setColor={setColor} style={style}/>
      <BlueContainer setColor={setColor} style={style}/>
      <PurpleContainer setColor={setColor} style={style}/>
    </div>
  );
}

function RedContainer(props) {
  // const [color, setColor] = useState("white");
  // const onClick = () => {
  //   setColor("red");
  // }
  console.log("RedContainer : ", props.setColor, props.style);
  const onClick = () => {
    props.setColor("red");
  }

  return (
    <div className="container" style={props.style}>
      <Button text="red" onClick={onClick}/>
    </div>
  );
}

function GreenContainer(props) {
  // const [color, setColor] = useState("white");
  // const onClick = () => {
  //   setColor("green");
  // }
  console.log("GreenContainer : ", props.setColor, props.style);
  const onClick = () => {
    props.setColor("green");
  }

  return (
    <div className="container" style={props.style}>
      <Button text="green" onClick={onClick}/>
    </div>
  );
}

function BlueContainer(props) {
  // const [color, setColor] = useState("white");
  // const onClick = () => {
  //   setColor("blue");
  // }
  console.log("BlueContainer : ", props.setColor, props.style);
  const onClick = () => {
    props.setColor("blue");
  }

  return (
    <div className="container" style={props.style}>
      <Button text="blue" onClick={onClick}/>
    </div>
  );
}

function PurpleContainer(props) {
  // const [color, setColor] = useState("white");
  // const onClick = () => {
  //   setColor("purple");
  // }
  console.log("PurpleContainer : ", props.setColor, props.style);
  const onClick = () => {
    props.setColor("purple");
  }

  return (
    <div className="container" style={props.style}>
      <Button text="purple" onClick={onClick}/>
    </div>
  );
}

export default App_without_redux;
