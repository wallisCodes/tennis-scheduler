import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function Test() {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["roland-garros", "wimbledon", "us-open", "aus-open"];
  let resetIndex = themeIndex >= themes.length - 1;

  function nextTheme() {
      !resetIndex ? setThemeIndex(themeIndex + 1) : setThemeIndex(0);
  }

  const nameRef = useRef(null);
  const teamRef = useRef(null);
  const [playerData, setPlayerData] = useState([]);


  function addPlayer(event){
    event.preventDefault;

    setPlayerData(prevPlayerData => {
      return [
        ...prevPlayerData,
        {
          id: uuidv4(),
          fullName: nameRef.current.value,
          team: teamRef.current.value
        }
      ]
    })
    
    // nameRef.current = "";
    // console.log(playerData);
    // console.log("Added new player!");
  }


  const deletePlayer = (index) => {
    const newArray = playerData.filter((_, i) => i !== index);
    setPlayerData(newArray);
  }




  // Storing the list of players inside an array to be rendered inside JSX
  const playerList = playerData.map(player => {
    return (
      player && <div key={player.id} className="flex">
        <h2>Player {playerData.indexOf(player) + 1}: {player.fullName} (Team {player.team})</h2>
        <button>Edit</button>
        <button onClick={() => deletePlayer(player.id - 1)}>Delete</button>
      </div>
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


              {/* <form onSubmit={addPlayer}> */}
                <div className="flex">
                  <label htmlFor="player-name" className="">Player Name</label>
                  <input 
                    type="text"
                    id="player-name"
                    placeholder="Full Name"
                    ref={nameRef}
                    
                    // onChange={handleChange}
                    // name="fullName"
                    // value={playerData.fullName}
                    className=""
                  />
                </div>
                
                <div className="flex">
                  <label htmlFor="player-team" className="">Player Team</label>
                  <input 
                    type="number"
                    id="player-team"
                    placeholder="Team Number"
                    ref={teamRef}
                    // onChange={handleChange}
                    // name="team"
                    // value={playerData.team}
                    className=""
                  />
                </div>

                <button
                  onClick={addPlayer} 
                  className="border">
                  Add player {`${playerData.length}/16`}
                </button>
              {/* </form> */}
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

export default Test