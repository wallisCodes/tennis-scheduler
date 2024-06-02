import { useState } from 'react'
import './App.css'

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["roland-garros", "wimbledon", "us-open", "aus-open"];
  let resetIndex = themeIndex >= themes.length - 1;

  function nextTheme() {
      !resetIndex ? setThemeIndex(themeIndex + 1) : setThemeIndex(0);
  }

  const [playerData, setPlayerData] = useState({
    players: [
      {
        id: 1,
        fullName: "",
        team: "",
      }
    ],
  })

  const [formData, setFormData] = useState({
    courtOne: true,
    courtTwo: true,
    courtThree: true,
    courtFour: true,
    courtFive: false,
    courtSix: false,
    algorithm: ""
  })

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   team: "",
  //   courtOne: true,
  //   courtTwo: true,
  //   courtThree: true,
  //   courtFour: true,
  //   courtFive: false,
  //   courtSix: false,
  //   algorithm: "" 
  // })

  

  // function handleChangeOne(event){
  //   const {name, value} = event.target;
  //   setPlayerData(prevPlayerData => {
  //     return {
  //       ...prevPlayerData,
  //       [name]: value
  //     }
  //   })
  // }

  function handleChange(event){
    const {name, value, type, checked} = event.target;
    
    if (name === "fullName"){
      setPlayerData(prevPlayerData => {
        return {
          players: [
            ...prevPlayerData.players,
            {
              id: prevPlayerData.players.length + 1,
              fullName: value
              // team: "X"
            }
          ]
        }
      })
    } 
    else if (name === "team"){
      setPlayerData(prevPlayerData => {
        return {
          players: [
            ...prevPlayerData.players,
            {
              id: prevPlayerData.players.length + 1,
              // fullName: "Y",
              team: value
            }
          ]
        }
      })
    } 
    else {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      })
    }
  }



  function addPlayer(event){
    // setPlayerData(prevPlayerData => {
    //   return {
    //     players: [
    //       ...prevPlayerData.players,
    //       {id: prevPlayerData.players.length + 1, fullName: 'New player', team: "-"}
    //     ],
    //     ...prevPlayerData
    //   } 
    // })
    event.preventDefault;
    console.log("Added new player!");
    console.log(playerData);
  }


  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }



  // Storing the list of players inside an array to be rendered inside JSX
  const playerList = playerData.players.map(player => {
    return (
      <h2 key={player.id}>Player: {player.fullName} (Team {player.team})</h2>
    )
  })


  
  return (
    <>
      <div className="App h-lvh" data-theme={themes[themeIndex]}>
        <div className=" max-w-7xl mx-auto ">
          
          {/* "NAVBAR" */}
          <div className="flex justify-center gap-8 py-4">
            <h1 className="text-white font-bold text-5xl">Tennis Scheduler</h1>
            <button onClick={nextTheme} className="border rounded-md px-2 my-1">Next theme</button>
          </div>


          <div className="flex w-full">
            <div className="box flex flex-col w-1/2 border-4 border-black">
              {/* FORM FOR PLAYER DATA */}
              <form onSubmit={addPlayer}>
                <div className="flex">
                  <label htmlFor="player-name" className="">Player Name</label>
                  <input 
                    type="text"
                    id="player-name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    name="fullName"
                    value={FormData.fullName}
                    className=""
                  />
                </div>
                
                <div className="flex">
                  <label htmlFor="player-team" className="">Player Team</label>
                  <input 
                    type="number"
                    id="player-team"
                    placeholder="Team Number"
                    onChange={handleChange}
                    name="team"
                    value={FormData.team}
                    className=""
                  />
                </div>

                <button 
                  className="border">
                  Add player
                </button>
              </form>


              {/* FORM FOR NON-PLAYER DATA */}
              <form onSubmit={handleSubmit}>
                {/* Court checkboxes */}
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

                {/* Algorithm types */}
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
            

            {/* OUTPUT AREA */}
            <div className="box w-1/2 border-2 border-white my-4 text-left">
              {playerList}
              {/* <h2>Player 1: {formData.fullName} (Team {formData.team})</h2> */}
              {/* <h2>Player 2: {formData.players[1].fullName}</h2> */}
              {/* {formData.players.length > 1 && <h2>Player 2: {formData.players[1].fullName}</h2>} */}
            </div>
          </div>          
        </div>
      </div>
      
    </>
  )
}

export default App
