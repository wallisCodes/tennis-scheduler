import React from "react"

export default function Schedule({players, courts}){
    // Defining useful variables to generate dynamic schedule table
    const sessions = ["18:00", "18:30", "19:00", "19:30"]; //time sessions each player will play before swapping, hard-coded temporarily

    //object containing key-value pairs of selected courts only
    const rawCourtsSelected = Object.fromEntries(
        Object.entries(courts).filter(([key, value]) => value === true) 
    );
    const courtsSelected = Object.keys(rawCourtsSelected); //array of selected court numbers (keys only)


    // const randomPlayerIndex = Math.floor(Math.random() * players.length);


    const randomSchedule = sessions.map((session, index) => (
        <table key={index}>
            <thead>
                <tr>
                    <th className="blank-cell"></th>
                    {courtsSelected.map((_, index) => <th key={index} scope="col">{courtsSelected[index]}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowSpan="4">{session}</th>
                    {courtsSelected.map((_, i) => <td key={i}>{players[Math.floor(Math.random() * players.length)].fullName}</td>)}
                </tr>
                <tr>
                    {courtsSelected.map((_, i) => <td key={i}>{players[Math.floor(Math.random() * players.length)].fullName}</td>)}
                </tr>
                <tr>
                    {courtsSelected.map((_, i) => <td key={i}>{players[Math.floor(Math.random() * players.length)].fullName}</td>)}
                </tr>
                <tr>
                    {courtsSelected.map((_, i) => <td key={i}>{players[Math.floor(Math.random() * players.length)].fullName}</td>)}
                </tr>
            </tbody>
        </table>
    ))

    // console.log(randomSchedule);
    // generateRandomSchedule(sessions, courtsSelected, players);
    
    return (
        <>
            <div className="flex-row space-y-10 min-h-96">
                {/* {generateRandomSchedule(sessions, courtsSelected, players)} */}

                {randomSchedule}
            </div>
        </>
    )
}