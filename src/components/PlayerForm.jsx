import React, { useState } from "react"

export default function PlayerForm({addPlayer, algorithm}){
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        addPlayer(name, team);
        
        setName("");
        setTeam("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="">
                <fieldset className="p-2 sm:p-4 my-2 sm:my-4 text-lg">
                    <legend className="px-2">Player details</legend>
                    <div className="flex space-x-2">
                        <label htmlFor="player-name" className="w-[150px] font-semibold">Full Name</label>
                        <input 
                            type="text"
                            id="player-name"
                            placeholder="Enter Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            className="w-[160px] text-center"
                            required
                        />
                    </div>

                    <div className="flex space-x-2">
                        <label htmlFor="team" className="w-[150px] font-semibold">{`Team ${algorithm = "random" && "(optional)"}`}</label>
                        <select 
                            id="team"
                            onChange={e => setTeam(e.target.value)}
                            value={team}
                            className="w-[160px] text-center"
                            // required
                        >
                            <option value="">Choose Team</option>
                            <option value="5">Team 5</option>
                            <option value="4">Team 4</option>
                            <option value="3">Team 3</option>
                            <option value="2">Team 2</option>
                            <option value="1">Team 1</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    <button className="border mt-4">Add Player</button>
                </fieldset>
            </form>
        </>
    )
} 