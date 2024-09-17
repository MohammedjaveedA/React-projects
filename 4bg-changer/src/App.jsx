import { useState } from "react"


function App() {
   const [color,setcolor]=useState()

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
        <button 
        onClick={()=>setcolor("red")}
        className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"red"}}>Red</button>
        <button 
         onClick={()=>setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"green"}}>Green</button>
        <button 
         onClick={()=>setcolor("skyblue")}
        className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"skyblue"}}>skyBlue</button>
        <button 
         onClick={()=>setcolor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"pink"}}>Pink</button>
        <button 
         onClick={()=>setcolor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"grey"}}>Grey</button>
      </div>
      
    </div>
   </div>
   
  )
}

export default App
