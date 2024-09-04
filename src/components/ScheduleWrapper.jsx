import React, { useState } from "react"
import Player from "./Player"
import PlayerForm from "./PlayerForm"
import EditPlayerForm from "./EditPlayerForm"
import ScheduleForm from "./ScheduleForm"
import Schedule from "./Schedule"
import { v4 as uuidv4 } from "uuid"
import Logo from "../assets/tennis-ball-calendar.png"

uuidv4();

export default function ScheduleWrapper(){
    const [theme, setTheme] = useState("dark");
    const [players, setPlayers] = useState([]);
    // const [players, setPlayers] = useState([ //4 player testing
    //     {
    //         id: uuidv4(),
    //         fullName: "Josh W",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dylan H",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dan G",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick H",
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
    //         fullName: "Nick Cunningham",
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
    // const [players, setPlayers] = useState([ //12 player testing
    //     {
    //         id: uuidv4(),
    //         fullName: "Josh W",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dylan H",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Dan G",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Nick H",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Sean W",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Tiger T",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Joe H",
    //         team: "5",
    //         isEditing: false
    //     },
    //     {
    //         id: uuidv4(),
    //         fullName: "Mark M",
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
    //     }
    // ]);
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
        "Court 2": false,
        "Court 1": false,
        "Court 3": false,
        "Court 4": false,
        "Court 5": false,
        "Court 6": false,
        "Court 7": false,
        "Court 8": false
    });
    const [algorithm, setAlgorithm] = useState("random");
    const [sessionLength, setSessionLength] = useState("30");
    const [startTime, setStartTime] = useState("");
    // const [startTime, setStartTime] = useState("08:00");
    const [finishTime, setFinishTime] = useState("");
    // const [finishTime, setFinishTime] = useState("10:00");

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
            <div className="bg-[var(--background-color)] min-h-lvh min-w-fit" data-theme={theme}>
                <div className="w-full bg-[var(--app-bar-color)]">
                    {/* "NAVBAR" */}
                    <div className="flex justify-between max-w-[96rem] mx-auto px-[2%] 2xl:px-0 gap-8 py-4">
                        
                        {/* <svg height="48" width="48" viewBox="0 0 69.447 69.447" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.0006944700000000001" transform="matrix(1, 0, 0, 1, 0, 0)">
                            <g transform="translate(-1271.769 -1574.648)"> 
                                <path d="M1341.208,1609.372a34.719,34.719,0,1,1-34.72-34.724A34.724,34.724,0,0,1,1341.208,1609.372Z" fill="#b9d613"></path>
                                <path d="M1311.144,1574.993a35.139,35.139,0,0,0-4.61-.344,41.069,41.069,0,0,1-34.369,29.735,34.3,34.3,0,0,0-.381,4.635l.183-.026a45.921,45.921,0,0,0,39.149-33.881Zm29.721,34.692a45.487,45.487,0,0,0-33.488,34.054l-.071.313a34.54,34.54,0,0,0,4.818-.455,41.218,41.218,0,0,1,28.686-29.194,36.059,36.059,0,0,0,.388-4.8Z" fill="#f7f7f7"></path>
                            </g>
                        </svg> */}

                        {/* <img src={Logo} className="h-16 w-16" alt="tennis ball schedule icon"/> */}


                        <h1 className="text-[var(--on-background-color)] font-bold text-3xl md:text-5xl">Tennis Scheduler</h1>
                        <select 
                            onChange={e => setTheme(e.target.value)}
                            value={theme}
                            className="px-1 sm:px-3 bg-[var()] text-white"
                        >
                            <option value="dark">Dark</option>
                            {/* <option value="light">Light</option> Re-implement after settling on colour scheme */}
                        </select>
                    </div>
                </div>
                

                {!showSchedule && <div className="flex flex-col max-w-[96rem] mx-auto md:flex-row gap-[2vw] w-[96%] 2xl:w-full my-[2vw]">
                    {/* FORMS FOR INPUT DATA */}
                    <div className="flex flex-col h-fit md:w-1/2 xl:w-2/5 rounded-xl p-1 md:p-2 bg-[var(--card-color)]">
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
                    <div className={players.length === 0 ? "flex flex-col justify-between text-[var(--on-surface-color)] bg-[var(--card-color)] md:w-1/2 xl:w-3/5 min-h-60 rounded-lg p-4" : "text-[var(--on-surface-color)] bg-[var(--card-color)] md:w-1/2 xl:w-3/5 min-h-60 rounded-lg p-4"}>
                        <h1 className="text-3xl font-semibold text-center">{`${players.length}/${suggestedPlayers} playing  (${maxPlayers} max)`}</h1>
                        {players.length === 0 && <h2 className="text-2xl align-middle text-center">Check players here before creating a schedule!</h2>}
                        <ul className="mt-6 flex flex-wrap justify-center">
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
                    <div className="w-full max-w-[96rem] mx-auto my-2 md:my-8">
                        <div className="flex-col  ml-[1%] px-2 pt-4 bg-[var(--card-color)] rounded-xl">
                            <button onClick={backToInput} className="bg-[var(--primary-variant-color)] rounded-md flex mx-4 mb-2 text-lg">
                                <svg className="back-button" fill={theme === "light" ? "#007d00" : "white"} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/>
                                </svg>
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
                    </div>}
                </div>
            </div>
        </>
    )
} 