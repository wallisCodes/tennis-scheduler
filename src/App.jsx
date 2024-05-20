import { useState } from 'react'
import './App.css'

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["roland-garros", "wimbledon", "us-open", "aus-open"];
  let resetIndex = themeIndex >= themes.length - 1;

  function nextTheme() {
      !resetIndex ? setThemeIndex(themeIndex + 1) : setThemeIndex(0);
  }

  const [formData, setFormData] = useState({
    fullName: "",
    courtOne: true,
    courtTwo: true,
    courtThree: true,
    courtFour: true,
    courtFive: false,
    courtSix: false,
    algorithm: "" 
  })

  function handleChange(event){
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }
  
  return (
    <>
      <div className="App h-lvh" data-theme={themes[themeIndex]}>
        <div className=" max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 py-4">
            <h1 className="text-white font-bold text-5xl">Tennis Scheduler</h1>
            <button onClick={nextTheme} className="border rounded-md px-2 my-1">Next theme</button>
          </div>
          
          {/* FORM INPUTS USED TO GENERATE SCHEDULE */}
          <form onSubmit={handleSubmit} className="box flex flex-col mx-auto border-4 border-black">
            <input 
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              name="fullName"
              value={FormData.fullName}
              className=""
            />
            <div className="space-x-2">
              <label htmlFor="court-1">Court 1</label>
              <input 
                type="checkbox"
                id="court-1"
                onChange={handleChange}
                name="courtOne"
                checked={formData.courtOne}
                className=""
              />
              
              <label htmlFor="court-2">Court 2</label>
              <input 
                type="checkbox"
                id="court-2"
                onChange={handleChange}
                name="courtTwo"
                checked={formData.courtTwo}
                className=""
              />
              
              <label htmlFor="court-3">Court 3</label>
              <input 
                type="checkbox"
                id="court-3"
                onChange={handleChange}
                name="courtThree"
                checked={formData.courtThree}
                className=""
              />
              
              <label htmlFor="court-4">Court 4</label>
              <input 
                type="checkbox"
                id="court-4"
                onChange={handleChange}
                name="courtFour"
                checked={formData.courtFour}
                className=""
              />
              
              <label htmlFor="court-5">Court 5</label>
              <input 
                type="checkbox"
                id="court-5"
                onChange={handleChange}
                name="courtFive"
                checked={formData.courtFive}
                className=""
              />
              
              <label htmlFor="court-6">Court 6</label>
              <input 
                type="checkbox"
                id="court-6"
                onChange={handleChange}
                name="courtSix"
                checked={formData.courtSix}
                className=""
              />
            </div>
            <fieldset>
              <legend>Scheduling algorithm</legend>
              <input 
                type="radio"
                id="random"
                name="algorithm"
                value="random"
                checked={formData.algorithm === "random"}
                onChange={handleChange}
              />
              <label htmlFor="random">Random</label>
              <br />

              <input 
                type="radio"
                id="seeded"
                name="algorithm"
                value="seeded"
                checked={formData.algorithm === "seeded"}
                onChange={handleChange}
              />
              <label htmlFor="seeded">Seeded</label>
              <br />

              <input 
                type="radio"
                id="teams"
                name="algorithm"
                value="teams"
                checked={formData.algorithm === "teams"}
                onChange={handleChange}
              />
              <label htmlFor="teams">Teams</label>
              <br />
            </fieldset>
            <button className="border">Generate Schedule</button>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
