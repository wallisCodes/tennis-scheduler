import React from "react"

export default function Schedule({players, courts, startTime, finishTime, convertToMinutes, convertToTime}){
    // =============== SESSION LOGIC ===============
    // convert start and finish times into minutes
    const startMinutes = convertToMinutes(startTime);
    const finishMinutes = convertToMinutes(finishTime);
    // obtain number of sessions from start and finish times
    const numberOfSessions = (finishMinutes - startMinutes) / 30; // 30 minutes sessions

    // create session array (time format) from start and finish times
    const sessionMinutes = [];
    sessionMinutes.push(startMinutes);
    for (let i = 0; i < numberOfSessions - 1; i++){
        sessionMinutes.push(sessionMinutes[i] + 30);
    }
    const sessionTimes = sessionMinutes.map(minutes => convertToTime(minutes));


    // =============== COURTS LOGIC ===============
    // object containing key-value pairs of selected courts only
    const rawCourtsSelected = Object.fromEntries(
        Object.entries(courts).filter(([key, value]) => value === true) 
    );
    const courtsSelected = Object.keys(rawCourtsSelected); //array of selected court numbers (keys only)

    
    // =============== PLAYERS LOGIC ===============
    //Fisher-Yates shuffling algorithm to randomise elements within an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    var oneSessionGroups = []; // temp array used to generate player schedule for each session
    var allSessionGroups = []; // contains player names for entire schedule
    
    for (let i = 0; i < sessionTimes.length; i++){
        const shuffledPlayerNames = shuffle(players.map(player => player.fullName)); // reshuffle players for every session
        for (let j = 0; j < shuffledPlayerNames.length; j += courtsSelected.length) {
            // split shuffled names into smaller arrays (length = courts selected) to be inserted into schedule table
            oneSessionGroups.push(shuffledPlayerNames.slice(j, j + courtsSelected.length));
        }
        allSessionGroups.push(oneSessionGroups); // push each session's players to the master array
        oneSessionGroups = []; // resetting array before generating another random set of players for the next session
    }


    const randomSchedule = sessionTimes.map((session, index) => (
        <table key={index} className="text-center text-sm sm:text-lg my-4 sm:m-4 text-[var(--table-header-color)]">
            <thead>
                <tr className="bg-[var(--primary-color)]">
                    <th className="blank-cell"></th>
                    {courtsSelected.map((_, index) => <th key={index} scope="col">{courtsSelected[index]}</th>)}
                </tr>
            </thead>
            <tbody className="bg-[var(--primary-alt-color)]">
                <tr className="">
                    <th rowSpan="4" className="bg-[var(--primary-color)]">{session}</th>
                    {allSessionGroups[index][0].map((player, i) => <td key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][1].map((player, i) => <td key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][2].map((player, i) => <td key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][3].map((player, i) => <td key={i}>{player}</td>)}
                </tr>
            </tbody>
        </table>
    ))

    
    return (
        <>
            <div className="flex flex-col">
                {randomSchedule}
            </div>
        </>
    )
}