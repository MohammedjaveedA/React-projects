import { useState, useCallback, useEffect , useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  //useRef hook
  const passwordref=useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!#@$%&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)
  }, [length, numberallowed, charallowed,setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => { 
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className=' pb-5 className="flex shadow rounded-lg overflow-hidden mb-4"'>

          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          /> <button onClick={copyPasswordToClipboard} className='     outline-none rounded-lg  bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2 pb-4 '>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />

            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-0 ml-4'>
            <input type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setnumallowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-0 ml-4'>
            <input type="checkbox"
              defaultChecked={charallowed}
              id='charInput'
              onChange={() => {
                setcharallowed((prev) => !prev)
              }} />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
