import { createContext, useContext } from "react";
import Button from "./Button";

const ThemeContext = createContext('light');

function App_context() {
  const theme = useContext(ThemeContext);
  console.log('App : ', theme);
  
  return (
    <div>
      <h1>Context API</h1>
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

function Form() {
  const theme = useContext(ThemeContext);
  console.log('Form : ', theme);

  return (
    <form>
      <ThemeContext.Provider value="medium">
        <Button1 />
        <Button1 />
      </ThemeContext.Provider>
    </form>
  );
}

function Button1() {
  const theme = useContext(ThemeContext);
  console.log('Button : ', theme);

  return (
    <button>show</button>
  );
}

export default App_context;
