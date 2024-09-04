import React from "react"

export default function Player({player, deletePlayer, toggleEditPlayer}){
    // only display team text if team has been selected
    const teamText = player.team !== "" ? `(Team ${player.team})` : "";
    return (
        <>
            <li className="flex justify-center basis-full xl:basis-1/2 space-x-3 my-1">
                <span className="text-lg">{`${player.fullName} ${teamText}`}</span>
                <svg onClick={() => toggleEditPlayer(player.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-[var(--primary-color)] mt-1">
                    <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/>
                </svg>
                <svg onClick={() => deletePlayer(player.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-[var(--on-primary-color)] mt-1.5">
                    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
            </li>
        </>
    )
}