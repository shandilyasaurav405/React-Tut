import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(0)

  
  // let counter = 15

  const addValue = () =>{
    if(counter+ +1 >20){
      alert("Limit exceed")
    }
    else{
    setCounter(counter+1);
    }
  }
  const removeValue = () =>{
    if(counter -1 <0){
      alert("value cannot be negative");
    }
    else{
    setCounter(counter-1);
    }
  }

  

  


  return (
    <>
      <h1>React</h1>
      <h3>Counter value: {counter}</h3>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Reduce value</button>
    </>
  )
}

export default App
