import React, { useState } from "react"

export default function PlayerForm({addPlayer}){
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
                <div className="flex space-x-2">
                    <label htmlFor="player-name" className="w-[40px]">Name</label>
                    <input 
                        type="text"
                        id="player-name"
                        placeholder="Full Name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="w-[140px]"
                        required
                    />
                </div>

                <div className="flex space-x-2">
                    <label htmlFor="team" className="w-[40px]">Team</label>
                    <select 
                        id="team"
                        onChange={e => setTeam(e.target.value)}
                        value={team}
                        className="w-[140px]"
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

                <button
                    className="border">
                    Add Player
                </button>
            </form>
        </>
    )
} 