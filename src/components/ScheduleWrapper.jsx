import React, { useState } from "react"
import Player from "./Player"
import PlayerForm from "./PlayerForm"
import EditPlayerForm from "./EditPlayerForm"
import ScheduleForm from "./ScheduleForm"
import Schedule from "./Schedule"
import "../ScheduleWrapper.css"
import { v4 as uuidv4 } from "uuid"

uuidv4();

export default function ScheduleWrapper(){
    const [theme, setTheme] = useState("roland-garros");
    // const [players, setPlayers] = useState([]);
    // const [players, setPlayers] = useState([ //4 player testing
    //     {
    //         id: uuidv4(),
    //         fullName: "Josh Wallis",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dylan Horman",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dan Grandl",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick Hinton",
    //         team: "5",
    //         isEditing: false
    //     }
    // ]);
    // const [players, setPlayers] = useState([ //8 player testing
    //     {
    //         id: uuidv4(),
    //         fullName: "Josh Wallis",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dylan Horman",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dan Grandl",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick Hinton",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Sean Watts",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Tiger Tom",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Joe Hodges",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Mark Molnar",
    //         team: "5",
    //         isEditing: false
    //     }
    // ]);
    const [players, setPlayers] = useState([ //16 player testing
        {
            id: uuidv4(),
            fullName: "Josh Wallis",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Dylan Horman",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Dan Grandl",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Nick Hinton",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Sean Watts",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Tiger Tom",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Joe Hodges",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Mark Molnar",
            team: "5",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Nick Jones",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Darren Healy",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Dave Buick",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Tom Darwell",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Rob Phillips",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Karl Gosbee",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Nick Cunningham",
            team: "4",
            isEditing: false
        },
        {
            id: uuidv4(),
            fullName: "Harry Harpin",
            team: "4",
            isEditing: false
        }
    ]);
    const [courts, setCourts] = useState({
        "Court 1": true,
        "Court 2": true,
        "Court 3": true,
        "Court 4": true,
        "Court 5": false,
        "Court 6": false
    });
    const [algorithm, setAlgorithm] = useState("random");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const courtsSelectedNumber = Object.values(courts).reduce((a, court) => a + court, 0); //counting number of courts selected (truthy values)
    const suggestedPlayers = courtsSelectedNumber * 4;
    const maxPlayers = "calculate depending on number of courts and time played (not yet implemented)";

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
            <div className="App min-h-lvh" data-theme={theme}>
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
                        <div className="box flex flex-col w-1/2 border-4 p-2 border-black">
                            <PlayerForm 
                                addPlayer={addPlayer}
                            />
                            <ScheduleForm
                                courts={courts}
                                setCourts={setCourts}
                                algorithm={algorithm}
                                setAlgorithm={setAlgorithm}
                                startTime={startTime}
                                setStartTime={setStartTime}
                                endTime={endTime}
                                setEndTime={setEndTime}
                            />
                        </div>

                        {/* PLAYER LIST */}
                        <div className="box w-1/2 border-2 border-white my-4 text-left">
                            <h1 className="text-3xl">{`Player List (${players.length}/${suggestedPlayers})`}</h1>
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
                    <div className="flex w-full border-2">
                        {/* OUTPUT SCHEDULE */}
                        <Schedule
                            players={players}
                            courts={courts}
                        />
                    </div>          
                </div>
            </div>
        </>
    )
} 