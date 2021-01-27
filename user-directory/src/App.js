import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import React, {useState} from 'react';


function App(props) {

  console.log(props);

  const [header, setHeader] = useState("Default");

  const [bgColour, setBgColour] =useState('black')

  function changeHeader() {
    console.log('aaasd');
    setHeader('ABCDE');
  }

  return (
    <div className="App">
      
      <Header title={header}></Header>

      <button onClick={changeHeader}>Change header </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
