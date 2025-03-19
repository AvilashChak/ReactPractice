import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]  = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-_=+\|[]{};:/?.~`>";

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 16);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-3xl shadow-2xl    w-full max-w-xl text-center">
      <h1 className="text-4xl font-extrabold text-white mb-8">Password Generator</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input 
          type="text"
          className="flex-1 rounded-xl bg-white text-gray-800 text-lg px-4 py-3 outline-none shadow-md w-full sm:w-auto"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button 
          onClick={copyPasswordToClipboard}
          className="bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-amber-500 transition-colors duration-300"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-6 text-left text-white">
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="font-medium text-lg">Length: {length}</label>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            id="length"
            onChange={(e) => setLength(e.target.value)} 
            className="w-2/3 accent-amber-400 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numberInput" className="font-medium text-lg">Include Numbers</label>
          <input 
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)} 
            className="accent-amber-400 w-5 h-5 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="charInput" className="font-medium text-lg">Include Special Characters</label>
          <input 
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)} 
            className="accent-amber-400 w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>

    </>
  )
};
  
export default App