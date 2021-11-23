import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter]  =  useState(1);
  const initCountObj = {contador:1};
  const [countObj,setCountObj]  =  useState(initCountObj);
  const exibir_reset = counter > 10;
  
  const reset = () => {
    setCounter(0);
  }
  

  

 
  return (
    <div className="App">
      <header className="App-header">     
        counter={counter}
        <br/>
        counter2={countObj.contador}
        <button onClick={() => {
          counter++
          setCounter(counter); 
          countObj.contador++ ;
          setCountObj(countObj);
          console.log('teste')
          }}> incrementar counter </button>
        {exibir_reset?<button onClick={reset}> reset </button>:''}
      </header>
    </div>
  );
}

export default App;
