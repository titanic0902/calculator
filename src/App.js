import React,{useState} from 'react'
import'./App.css'

export const App = () => {
  const[result,setResult]=useState("");
  
  const clickhandler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setResult("");
  }
  const calculate=()=>{
    setResult(eval(result))
  }
  return (
    <div class="calc">
      <input type="text" placeholder='0' id='answer' value={result}/>
      <input type="button" value="9" className="button" onClick={clickhandler}/>
      <input type="button" value="8" className="button" onClick={clickhandler}/>
      <input type="button" value="7" className="button" onClick={clickhandler}/>
      <input type="button" value="6" className="button" onClick={clickhandler}/>
      <input type="button" value="5" className="button" onClick={clickhandler}/>
      <input type="button" value="4" className="button" onClick={clickhandler}/>
      <input type="button" value="3" className="button" onClick={clickhandler}/>
      <input type="button" value="2" className="button" onClick={clickhandler}/>
      <input type="button" value="1" className="button"onClick={clickhandler}/>
      <input type="button" value="0" className="button"onClick={clickhandler}/>
      <input type="button" value="*" className="button" onClick={clickhandler}/>
      <input type="button" value="+" className="button" onClick={clickhandler}/>
      <input type="button" value="-" className="button"onClick={clickhandler}/>
      <input type="button" value="/" className="button" onClick={clickhandler}/>
      <input type="button" value="%" className="button" onClick={clickhandler}/>
      <input type="button" value="." className="button" onClick={clickhandler}/>
      <input type="button" value="clear" className="button button1" onClick={clearDisplay}/>
      <input type="button" value="=" className="button button1" onClick={calculate} />
     
    </div>
  )
}
//export default App;





















/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

export default App;
