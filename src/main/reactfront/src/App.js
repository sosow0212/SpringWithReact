import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const [numList, setNumList] = useState([]);

  function numRecording() {
    setNumList([...numList, num]); 
    // ...은 배열에 기존 데이터를 의미하고, num을 저장한다는 의미이다.
    // 즉 기존의 배열에 새로운 데이터인 num을 추가하는 것이다.
    
    setNum(0);
  }

  return (
    <div className="App">
      <div>현재 숫자 : {num}</div>
      <button onClick={() => {setNum(num+1)}}>숫자 증가</button>
      <button onClick={() => {setNum(num-1)}}>숫자 감소</button>
      <button onClick={numRecording}>숫자 기록</button>
      <h1>저장된 숫자</h1>
      <ul>
        {numList.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
