// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl '>tailwind test</h1>
    
    
    <Card name="Saurav" btnText="visit Me"/>
    <Card name="Somya"  btnText="Click Me"/>
    </>
  )
}

export default App
