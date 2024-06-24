import React, { useState } from "react"
import Player from "./Player"
import PlayerForm from "./PlayerForm"
import EditPlayerForm from "./EditPlayerForm"
import ScheduleForm from "./ScheduleForm"
import Schedule from "./Schedule"
import { v4 as uuidv4 } from "uuid"

uuidv4();

export default function ScheduleWrapper(){
    const [theme, setTheme] = useState("wimbledon");
    const [players, setPlayers] = useState([]);
    // const [players, setPlayers] = useState([ //16 player testing
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
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick Jones",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Darren Healy",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dave Buick",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Tom Darwell",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Rob Phillips",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Karl Gosbee",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick Cunningham",
    //         team: "4",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Harry Harpin",
    //         team: "4",
    //         isEditing: false
    //     }
    // ]);
    const [courts, setCourts] = useState({
        "Court 1": false,
        "Court 2": false,
        "Court 3": false,
        "Court 4": false,
        "Court 5": false,
        "Court 6": false
    });
    const [algorithm, setAlgorithm] = useState("random");
    const [sessionLength, setSessionLength] = useState("30");
    const [startTime, setStartTime] = useState("");
    const [finishTime, setFinishTime] = useState("");

    const sessionDuration = parseInt(sessionLength);
    const courtsSelectedNumber = Object.values(courts).reduce((a, court) => a + court, 0); //counting number of courts selected (truthy values)
    const suggestedPlayers = courtsSelectedNumber * 4;
    const maxPlayers = suggestedPlayers + courtsSelectedNumber;

    const [showSchedule, setShowSchedule] = useState(false); // global variable which controls displaying schedule, triggered by "Generate Schedule" form button

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

    function convertToMinutes(string){
        const t = parseInt(string.replace(":", ""));
        return Math.floor(t/100) * 60 + (t % 100);
    }

    function convertToTime(minutes){
        const h = Math.floor(minutes/60);
        const m = (minutes % 60);
        return `${("0"+h).slice(-2)}:${("0"+m).slice(-2)}`;
    }

    function backToInput(){
        setShowSchedule(false);
    }

    return (
        <>
            <div className="App min-h-lvh" data-theme={theme}>
                <div className=" max-w-7xl mx-auto">
                    {/* "NAVBAR" */}
                    <div className="flex justify-center gap-8 py-4 sm:mb-12">
                        <h1 className="text-white font-bold text-3xl sm:text-5xl">Tennis Scheduler</h1>
                        <select 
                            onChange={e => setTheme(e.target.value)}
                            value={theme}
                            className="px-1 sm:px-3 bg-[var(--primary-alt-color)] text-white"
                        >
                            <option value="roland-garros">Roland Garros</option>
                            <option value="wimbledon">Wimbledon</option>
                            <option value="us-open">US Open</option>
                            <option value="aus-open">Australian Open</option>
                        </select>
                    </div>

                    {!showSchedule && <div className="sm:flex w-full">
                        {/* FORMS FOR INPUT DATA */}
                        <div className="box flex flex-col sm:w-1/2 border-4 p-2 px-4 border-black">
                            <PlayerForm 
                                addPlayer={addPlayer}
                                algorithm={algorithm}
                            />
                            <ScheduleForm
                                players={players}
                                suggestedPlayers={suggestedPlayers}
                                maxPlayers={maxPlayers}
                                courts={courts}
                                setCourts={setCourts}
                                courtsSelectedNumber={courtsSelectedNumber}
                                algorithm={algorithm}
                                setAlgorithm={setAlgorithm}
                                sessionLength={sessionLength}
                                setSessionLength={setSessionLength}
                                sessionDuration={sessionDuration}
                                startTime={startTime}
                                setStartTime={setStartTime}
                                finishTime={finishTime}
                                setFinishTime={setFinishTime}
                                convertToMinutes={convertToMinutes}
                                convertToTime={convertToTime}
                                setShowSchedule={setShowSchedule}
                            />
                        </div>

                        {/* PLAYER LIST */}
                        <div className={players.length === 0 ? "flex flex-col justify-between bg-[var(--primary-alt-color)] sm:w-1/2 min-h-60 border-4 p-4" : "bg-[var(--primary-alt-color)] sm:w-1/2 min-h-60 border-4 p-4"}>
                            <h1 className="text-3xl font-semibold text-center">{`${players.length}/${suggestedPlayers} playing  (${maxPlayers} max)`}</h1>
                            {players.length === 0 && <h2 className="text-2xl align-middle text-center">Check players here before creating a schedule!</h2>}
                            <ul className="mt-6">
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
                            </ul>
                        </div>
                    </div>}
                    <div className="flex w-full">
                        {/* OUTPUT SCHEDULE */}
                        {showSchedule &&
                        <div className="box flex-col w-full border-2 border-black">
                            <button onClick={backToInput} className="border flex m-4 text-lg">
                                <svg width="24" height="24" className="mt-[3px] mr-2" fill="white" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/>
                                </svg>
                                Go back
                            </button>
                            <Schedule
                                players={players}
                                courts={courts}
                                sessionDuration={sessionDuration}
                                startTime={startTime}
                                finishTime={finishTime}
                                convertToMinutes={convertToMinutes}
                                convertToTime={convertToTime}
                            />
                        </div>
                        }
                    </div>          
                </div>
            </div>
        </>
    )
} 