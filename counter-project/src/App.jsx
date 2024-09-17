import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter /*variable*/,setCounter/*function*/]= useState(0)
// let counter=0
const addvalue = ()=>{
  counter=counter+1
  if(counter<20){
  setCounter(counter)
  }
  else{
    setCounter(counter=20)
  }
}

const removevalue=()=>{
    counter=counter-1
    if(counter >0){
    setCounter(counter)
  }
  else{
    setCounter(counter=0)
  }

}
  
  return (
    <>
    <h2>Counter value:{counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <br />
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
