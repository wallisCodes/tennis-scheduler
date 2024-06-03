import React, { useState } from "react"

export default function EditPlayerForm({editPlayer, player}){
    const [name, setName] = useState(player.fullName);
    const [team, setTeam] = useState(player.team);

    function handleSubmit(event){
        event.preventDefault();
        editPlayer(name, team, player.id);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <input 
                        type="text"
                        placeholder="Edit Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className=""
                        required
                    />
                    <select 
                        onChange={e => setTeam(e.target.value)}
                        value={team}
                        className=""
                        required
                    >
                        <option value="">Choose Team</option>
                        <option value="5">Team 5</option>
                        <option value="4">Team 4</option>
                        <option value="3">Team 3</option>
                        <option value="2">Team 2</option>
                        <option value="1">Team 1</option>
                        <option value="none">None</option>
                    </select>
                    <label>
                        <input type="submit" className="hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </label>
                </div>    
            </form>
        </>
    )
}  