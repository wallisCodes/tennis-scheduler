import { useState } from 'react'
import './App.css'

function App() {
  let [themeIndex, setThemeIndex] = useState(0);
  const themes = ["roland-garros", "wimbledon", "us-open", "aus-open"];
  let resetIndex = themeIndex >= themes.length - 1;

  function nextTheme() {
      !resetIndex ? setThemeIndex(themeIndex + 1) : setThemeIndex(0);
  }
  
  return (
    <>
      <div className="App h-lvh" data-theme={themes[themeIndex]}>
        <div className=" max-w-7xl mx-auto text-center">
          <h1 className="text-white font-bold text-5xl">Tennis Scheduler</h1>
          <button onClick={nextTheme} className="border rounded-md px-2 py-1 my-4">Next theme</button>
          <div className="box w-[200px] h-[200px] mx-auto border-4 border-black"></div>
        </div>
      </div>
      
    </>
  )
}

export default App
