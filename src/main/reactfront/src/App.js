import './App.css';
import React, {useState} from 'react';

function App() {

  const [name, setname] = useState("Lee1");

  return (
    <div className="App">
      <h1>H1 태그</h1>

      {name}

      <h2>{name} -- h2안에 변수적용</h2>
    </div>
  );
}

export default App;
