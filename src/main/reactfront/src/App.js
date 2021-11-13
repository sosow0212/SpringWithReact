import "./App.css";
import React, { useState } from "react";

function App() {
  let [num, setNum] = useState(1);

  return (
    <div className="App">
      <div style={{marginTop:"10%", marginBottom:"3%", fontSize:"30px"}}>React + Spring boot 프론트엔드와 백엔드 동시 개발해보기</div>
      <div style={{color : "red", fontSize : "30px"}}>Style 적용해보기</div>
      <div>{num}</div>
      <button onClick={() => {setNum(num = num + 1)}}>버튼</button>
    </div>
  );
}

export default App;
