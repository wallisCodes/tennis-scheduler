import React, { useState } from "react"
import PlayerForm from "./PlayerForm"
import { v4 as uuidv4 } from "uuid"
import "../App.css"
uuidv4();

export default function ScheduleWrapper(){
    const [themeIndex, setThemeIndex] = useState(0);
    const themes = ["roland-garros", "wimbledon", "us-open", "aus-open"];
    let resetIndex = themeIndex >= themes.length - 1;

    function nextTheme() {
        resetIndex ? setThemeIndex(0) : setThemeIndex(themeIndex + 1);
    }

    const [players, setPlayers] = useState([]);

    function addPlayer(name, team){
        setPlayers([
            ...players,
            {
                id: uuidv4(),
                fullName: name,
                team: team,
                isEditing: false
            }
        ])
        // console.log(players);
    }

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
                            <PlayerForm 
                                addPlayer={addPlayer}
                            />
                        </div>

                        {/* OUTPUT AREA */}
                        <div className="box w-1/2 border-2 border-white my-4 text-left">
                        
                        </div>
                    </div>          
                </div>
            </div>
        </>
    )
} 