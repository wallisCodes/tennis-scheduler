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
    // console.log(`session times array: ${JSON.stringify(sessionTimes)}`);


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
    console.log(`All session groups length: ${allSessionGroups.length}`);
    console.log(`Array[0] length: ${allSessionGroups[0].length}`);
    // console.log(`Array[1] length: ${allSessionGroups[1].length}`);
    // console.log(`Array[2] length: ${allSessionGroups[2].length}`);
    // console.log(`Array[3] length: ${allSessionGroups[3].length}`);
    // console.log(`Array[4] length: ${allSessionGroups[4].length}`);

    console.log(`Array[0][0] length: ${allSessionGroups[0][0].length}`);

    console.log(`All session groups array: ${JSON.stringify(allSessionGroups)}`)


    const randomSchedule = sessionTimes.map((session, index) => (
        // console.log(`All session groups array: ${JSON.stringify(allSessionGroups)}`),

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
                    {allSessionGroups[index][0].map((player, i) => <td key={i}>{player}</td>)}
                    {/* {allSessionGroups[index][0].map((_) => console.log(`Array[${index}][0]: ${JSON.stringify(allSessionGroups[index][0])}`))} */}
                </tr>
                <tr>
                    {allSessionGroups[index][1].map((player, i) => <td key={i}>{player}</td>)}
                    {/* {allSessionGroups[index][1].map((_) => console.log(`Array[${index}][1]: ${JSON.stringify(allSessionGroups[index][1])}`))} */}
                </tr>
                <tr>
                    {allSessionGroups[index][2].map((player, i) => <td key={i}>{player}</td>)}
                    {/* {allSessionGroups[index][2].map((_) => console.log(`Array[${index}][2]: ${JSON.stringify(allSessionGroups[index][2])}`))} */}
                </tr>
                <tr>
                    {allSessionGroups[index][3].map((player, i) => <td key={i}>{player}</td>)}
                    {/* {allSessionGroups[index][3].map((_) => console.log(`Array[${index}][3]: ${JSON.stringify(allSessionGroups[index][3])}`))} */}
                </tr>
            </tbody>
        </table>
        
        
        
    ))

    
    return (
        <>
            <div className="flex-row space-y-10 min-h-96">
                {randomSchedule}
            </div>
        </>
    )
}