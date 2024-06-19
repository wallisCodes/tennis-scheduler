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
                <div className="flex justify-center text-lg">
                    <input 
                        type="text"
                        placeholder="Edit Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-[140px] text-center"
                        required
                    />
                    <select 
                        onChange={e => setTeam(e.target.value)}
                        value={team}
                        className="w-[140px] text-center"
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
                    <label className="flex align-middle space-x-2">
                        <input type="submit" className="hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mt-[5px]">
                            <path d="M21.855 10.303c.086.554.145 1.118.145 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.348 0 4.518.741 6.304 1.993l-1.421 1.457c-1.408-.913-3.083-1.45-4.883-1.45-4.963 0-9 4.038-9 9s4.037 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.865-1.902zm-.951-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/>
                        </svg>
                    </label>
                </div>    
            </form>
        </>
    )
}  