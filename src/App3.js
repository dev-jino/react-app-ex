import { useEffect } from "react";

// 데이터 가져오기
function App3() {
  const getData = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Json Server Test</h1>
      
    </div>
  );
}

export default App3;
