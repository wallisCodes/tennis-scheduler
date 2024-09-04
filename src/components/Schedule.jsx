import React, { useEffect } from "react"

export default function Schedule({players, courts, sessionDuration, startTime,
                                finishTime, convertToMinutes, convertToTime}){
    // =============== SESSION LOGIC ===============
    // convert start and finish times into minutes
    const startMinutes = convertToMinutes(startTime);
    const finishMinutes = convertToMinutes(finishTime);
    // obtain number of sessions from start and finish times
    const numberOfSessions = (finishMinutes - startMinutes) / sessionDuration;

    // create session array (time format) from start and finish times
    const sessionMinutes = [];
    sessionMinutes.push(startMinutes);
    for (let i = 0; i < numberOfSessions - 1; i++){
        sessionMinutes.push(sessionMinutes[i] + sessionDuration);
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
        return array;
    }


    var allSessionGroups = []; // contains player names for entire schedule in row format

    function generateRandomSchedule(){
        var oneSessionGroups = []; // temp array used to generate player schedule for each session
        
    
        for (let i = 0; i < sessionTimes.length; i++){
            const shuffledPlayerNames = shuffle(players.map(player => player.fullName)); // reshuffle players for every session
            for (let j = 0; j < shuffledPlayerNames.length; j += courtsSelected.length) {
                // split shuffled names into smaller arrays (length = courts selected) to be inserted into schedule table
                oneSessionGroups.push(shuffledPlayerNames.slice(j, j + courtsSelected.length));
            }
            allSessionGroups.push(oneSessionGroups); // push each session's players to the master array
            oneSessionGroups = []; // resetting array before generating another random set of players for the next session
        }
        return allSessionGroups;
    }
    // generateRandomSchedule();

    
    // =============== PAIR COUNTING LOGIC ===============
    // transposing allSessionGroups array from rows into columns for easier pair-tracking
    function rowsToCols(array){
        const cols = array[0].length;
        const newArray = Array.from({ length: cols }, () => []);

        for (let i = 0; i < 4; i++) { // will always be 4 due to each court having 4 players (doubles)
            for (let j = 0; j < cols; j++) {
            newArray[j].push(array[i][j]);
            }
        }
        return newArray;
    }
    
    // Function to flatten and pair elements from a 2D array
    function generatePairs(array) {
        const flatArray = array.flat();
        const pairs = [];
    
        for (let i = 0; i < flatArray.length; i += 2) {
            const pair = [flatArray[i], flatArray[i + 1]];
            pairs.push(pair);
        }
        return pairs;
    }
    
    // Function to count occurrences of pairs across multiple arrays
    function countPairs(arrays) {
        const pairCounts = new Map();
        const allPairs = [];
    
        arrays.forEach((array) => {
            const pairs = generatePairs(array);
            allPairs.push(...pairs);
            
            // Loop through each pair and count how many instances there are of each
            pairs.forEach(pair => {
                // Sort pairs to ensure pairs like ["Player 1", "Player 2"] and ["Player 2", "Player 1"] are treated as the same
                const sortedPair = pair.sort().toString(); // Alphabetically arranging player names inside pair array
                if (pairCounts.has(sortedPair)) {
                pairCounts.set(sortedPair, pairCounts.get(sortedPair) + 1);
                } else {
                pairCounts.set(sortedPair, 1);
                }
            });
        });
        return { pairCounts, allPairs };
    }


    // function which returns the number of duplicate pairs given entire schedule data (masterArray)
    function countDuplicatePairings(masterArray){
        const columnData = masterArray.map(session => rowsToCols(session)).flat();
        // console.log(`Column data: ${JSON.stringify(columnData)}`);

        const { pairCounts, allPairs } = countPairs(columnData);
        // console.log(`All Pairs: ${JSON.stringify(allPairs)}`);

        const countsOnly = [];
        // Count pairs in the arrays and print them
        pairCounts.forEach((count, pair) => {
            // console.log(`Pair: ${pair}: ${count}`);
            countsOnly.push(count);
        });
        return Math.max(...countsOnly);
    }
    // const maxDuplicates = countDuplicatePairings(generateRandomSchedule());


    // Generating schedules until a compliant one is created (i.e. one where the max duplicates is acceptable)
    // min and max theoretical duplicates, may be used for user to choose desired max duplicates
    const minPossibleDuplicates = Math.ceil(sessionTimes.length/(players.length - 1));
    const maxPossibleDuplicates = sessionTimes.length;
    console.log(`MIN possible dupes: ${minPossibleDuplicates}, MAX possible dupes: ${maxPossibleDuplicates}`);
    const allowedDuplicates = minPossibleDuplicates + 1;
    // const allowedDuplicates = 1; // hard-coded value for testing
    // const allowedDuplicates = Math.round((sessionTimes.length/courtsSelected.length) - 0.5); // first idea: sessionLength/3 rounded up? (Not sure this works for just 4 players of many sessions)
    console.log(`Allowed duplicates: ${allowedDuplicates}`);

    var generationAttempt = 0; // keep track of how many attempts were made to generate a compliant schedule
    var keepGenerating = true;

    // Generating a compliant schedule
    do {
        generateRandomSchedule();
        const maxDuplicates = countDuplicatePairings(allSessionGroups);
        
        generationAttempt += 1;
        console.log(`Attempt #${generationAttempt}, max duplicates: ${maxDuplicates}`);

        if (maxDuplicates <= allowedDuplicates){
            keepGenerating = false;
            break;
        }
        allSessionGroups = []; // resetting to an empty array

    } while (keepGenerating);
    
    
    // Debugging
    // console.log(`All session groups: ${JSON.stringify(allSessionGroups)}`);
    // console.log(`Keep generating? ${keepGenerating}`);
    
    // console.log(`Max duplicates: ${maxDuplicates}`);
    // console.log(`Generation attempts: ${generationAttempt}`);
    
 
    // console.log(`(Counts Only): ${countsOnly}`);
    // console.log(`ACTUAL max duplicates: ${maxDuplicates}`);

    // choosing maxDuplicates depending on total pairings?
    // const totalPairings = (Math.floor(players.length/4)*sessionTimes.length*2); // exclude excess players who are sitting out
    // console.log(`Total pairings: ${totalPairings}`);


    const randomSchedule = sessionTimes.map((session, index) => (
        <table key={index} className="text-center text-sm sm:text-lg my-3 sm:m-4">
            <thead>
                <tr>
                    <th className="blank-cell px-[3px] py-[5px] sm:p-2.5"></th>
                    {courtsSelected.map((_, index) => <th key={index} className="bg-[var(--background-color)] text-[var(--on-background-color)] min-w-20 px-[3px] py-[5px] sm:p-2.5" scope="col">{courtsSelected[index]}</th>)}
                </tr>
            </thead>
            <tbody className="bg-[var(--primary-alt-color)]">
                <tr>
                    <th rowSpan="4" className="bg-[var(--background-color)] text-[var(--on-background-color)] min-w-12 sm:min-w-20 max-w-20 sm:max-w-40 px-[3px] py-[5px] sm:p-2.5">{session}</th>
                    {allSessionGroups[index][0].map((player, i) => <td className=" px-[3px] md:px-5 py-[5px] md:py-2 sm:p-2.5 border-b-0" key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][1].map((player, i) => <td className=" px-[3px] md:px-5 py-[5px] md:py-2 sm:p-2.5 border-t-0" key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][2].map((player, i) => <td className=" px-[3px] md:px-5 py-[5px] md:py-2 sm:p-2.5 border-b-0" key={i}>{player}</td>)}
                </tr>
                <tr>
                    {allSessionGroups[index][3].map((player, i) => <td className=" px-[3px] md:px-5 py-[5px] md:py-2 sm:p-2.5 border-t-0" key={i}>{player}</td>)}
                </tr>
            </tbody>
        </table>
    ))

    
    return (
        <>
            <div className="flex flex-col w-fit mx-auto">
                {randomSchedule}
            </div>
        </>
    )
}