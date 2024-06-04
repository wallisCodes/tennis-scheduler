import React, { useState } from "react"
import Player from "./Player"
import PlayerForm from "./PlayerForm"
import EditPlayerForm from "./EditPlayerForm"
import ScheduleForm from "./ScheduleForm"
import "../ScheduleWrapper.css"
import { v4 as uuidv4 } from "uuid"

uuidv4();

export default function ScheduleWrapper(){
    const [theme, setTheme] = useState("roland-garros");
    const [players, setPlayers] = useState([]);
    const [courts, setCourts] = useState({
        one: true,
        two: true,
        three: true,
        four: true,
        five: false,
        six: false
    });
    const [algorithm, setAlgorithm] = useState("random");

    const courts_selected = Object.values(courts).reduce((a, court) => a + court, 0); //counting number of courts selected (truthy values)
    const suggested_players = courts_selected * 4;
    const max_players = "calculate depending on number of courts and time played (not yet implemented)";

    function addPlayer(name, team){
        setPlayers([
            ...players,
            {
                id: uuidv4(),
                fullName: name,
                team: team,
                isEditing: false
            }
        ]);
    }

    function deletePlayer(id){
        setPlayers(players.filter(player => player.id !== id));
    }

    function toggleEditPlayer(id){
        setPlayers(players.map(player => player.id === id ? 
            {...player, isEditing: !player.isEditing} : player
        ))
    }

    function editPlayer(fullName, team, id){
        setPlayers(players.map(player => player.id === id ? 
            {...player, fullName, team, isEditing: !player.isEditing} : player
        ))
    }

    return (
        <>
            <div className="App h-lvh" data-theme={theme}>
                <div className=" max-w-7xl mx-auto ">
                    {/* "NAVBAR" */}
                    <div className="flex justify-center gap-8 py-4">
                        <h1 className="text-white font-bold text-5xl">Tennis Scheduler</h1>
                        <select 
                            onChange={e => setTheme(e.target.value)}
                            value={theme}
                            className=""
                        >
                            <option value="roland-garros">Roland Garros</option>
                            <option value="wimbledon">Wimbledon</option>
                            <option value="us-open">US Open</option>
                            <option value="aus-open">Australian Open</option>
                        </select>
                    </div>

                    <div className="flex w-full">
                        {/* FORMS FOR INPUT DATA */}
                        <div className="box flex flex-col w-1/2 border-4 border-black">
                            <PlayerForm 
                                addPlayer={addPlayer}
                            />
                            <ScheduleForm
                                courts={courts}
                                setCourts={setCourts}
                                algorithm={algorithm}
                                setAlgorithm={setAlgorithm}
                            />
                        </div>

                        {/* PLAYER LIST */}
                        <div className="box w-1/2 border-2 border-white my-4 text-left">
                            <h1 className="text-3xl">{`Player List (${players.length}/${suggested_players})`}</h1>
                            {players.map((player, index) => (
                                player.isEditing ? (
                                    <EditPlayerForm
                                        key={index}
                                        player={player}
                                        editPlayer={editPlayer}
                                    />
                                ) : (
                                    <Player
                                        key={index}
                                        player={player}
                                        deletePlayer={deletePlayer}
                                        toggleEditPlayer={toggleEditPlayer}
                                    />
                                )  
                            ))}
                        </div>
                    </div>          
                </div>
            </div>
        </>
    )
} 