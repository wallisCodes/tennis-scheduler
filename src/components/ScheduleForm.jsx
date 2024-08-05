import React, { useState } from "react"

export default function ScheduleForm({players, suggestedPlayers, maxPlayers, courts, setCourts, courtsSelectedNumber, algorithm,
                                    setAlgorithm, sessionLength, setSessionLength, sessionDuration, startTime, setStartTime,
                                    finishTime, setFinishTime, convertToMinutes, convertToTime, setShowSchedule}){
                                        
    function handleCourts(event){
        const {name, checked} = event.target;
        setCourts(prevCourts => {
            return {
              ...prevCourts,
              [name]: checked
            }
         })
    }

    function minutesUntilLastTime(startTime){
        const lastMinutes = 1260; // 9pm in minutes
        return lastMinutes - convertToMinutes(startTime)
    }
    
    const sessionsUntilLastTime = Math.floor(minutesUntilLastTime(startTime) / sessionDuration);
    const potentialFinishTimes = [];

    for (let i = 1; i <= sessionsUntilLastTime; i++){
        let timeOption = convertToTime(convertToMinutes(startTime) + i * sessionDuration);
        potentialFinishTimes.push(timeOption);
    }
    const finishTimeOptions = potentialFinishTimes.map((timeOption, index) => <option key={index}>{timeOption}</option>);

    // form validation logic to ensure smooth schedule generation
    const correctPlayers = suggestedPlayers <= players.length && players.length <= maxPlayers;
    const correctCourts = courtsSelectedNumber >= 1;
    const validationPassed = correctPlayers && correctCourts;

    function handleSubmit(event){
        event.preventDefault();
        if (!correctCourts){
            alert("Make sure at least one court has been selected.");
        } else if (!correctPlayers){
            alert("Make sure a suitable number of players have been added for the courts selected.");
        } else {
            setShowSchedule(true);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Court checkboxes */}
                <fieldset className="p-2 sm:p-4 my-2 sm:my-4 text-lg">
                    <legend className="px-2">Choose courts</legend>
                    <div className="">
                        <label htmlFor="court-1" className="mr-2 font-semibold">1</label>
                        <input 
                            type="checkbox"
                            id="court-1"
                            onChange={handleCourts}
                            name="Court 1"
                            checked={courts["Court 1"]}
                            className="mr-4"
                        />
                        
                        <label htmlFor="court-2" className="mr-2 font-semibold">2</label>
                        <input 
                            type="checkbox"
                            id="court-2"
                            onChange={handleCourts}
                            name="Court 2"
                            checked={courts["Court 2"]}
                            className="mr-4"
                        />
                        
                        <label htmlFor="court-3" className="mr-2 font-semibold">3</label>
                        <input 
                            type="checkbox"
                            id="court-3"
                            onChange={handleCourts}
                            name="Court 3"
                            checked={courts["Court 3"]}
                            className="mr-4"
                        />
                        
                        <label htmlFor="court-4" className="mr-2 font-semibold">4</label>
                        <input 
                            type="checkbox"
                            id="court-4"
                            onChange={handleCourts}
                            name="Court 4"
                            checked={courts["Court 4"]}
                            className="mr-4"
                        />
                        
                        <label htmlFor="court-5" className="mr-2 font-semibold">5</label>
                        <input 
                            type="checkbox"
                            id="court-5"
                            onChange={handleCourts}
                            name="Court 5"
                            checked={courts["Court 5"]}
                            className="mr-4"
                        />
                        
                        <label htmlFor="court-6" className="mr-2 font-semibold">6</label>
                        <input 
                            type="checkbox"
                            id="court-6"
                            onChange={handleCourts}
                            name="Court 6"
                            checked={courts["Court 6"]}
                            className="mr-4"
                        />

                        <label htmlFor="court-7" className="mr-2 font-semibold">7</label>
                        <input 
                            type="checkbox"
                            id="court-7"
                            onChange={handleCourts}
                            name="Court 7"
                            checked={courts["Court 7"]}
                            className="mr-4"
                        />

                        <label htmlFor="court-8" className="mr-2 font-semibold">8</label>
                        <input 
                            type="checkbox"
                            id="court-8"
                            onChange={handleCourts}
                            name="Court 8"
                            checked={courts["Court 8"]}
                            className="mr-4"
                        />
                    </div>
                </fieldset>
                
                {/* Algorithm types */}
                <fieldset className="p-2 sm:p-4 my-2 sm:my-4 text-lg">
                    <legend className="px-2">Scheduling algorithm</legend>
                    <input 
                        type="radio"
                        id="random"
                        name="algorithm"
                        value="random"
                        checked={algorithm === "random"}
                        onChange={(e) => setAlgorithm(e.target.value)}
                    />
                    <label htmlFor="random" className="ml-2 font-semibold">Random</label>
                    <br />

                    <input 
                        type="radio"
                        id="teams"
                        name="algorithm"
                        value="teams"
                        checked={algorithm === "teams"}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        disabled
                    />
                    <label htmlFor="teams" className="ml-2">Teams (coming soon)</label>
                    <br />

                    {/* <input 
                        type="radio"
                        id="seeded"
                        name="algorithm"
                        value="seeded"
                        checked={algorithm === "seeded"}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        disabled
                    />
                    <label htmlFor="seeded">Seeded (coming soon)</label>
                    <br /> */}
                </fieldset>

                {/* Time picker */}
                <fieldset className="p-2 sm:p-4 my-2 sm:my-4 text-lg">
                    <legend className="px-2">Session timings</legend>
                    {/* Session length picker */}
                    <div className="sm:flex mb-2">
                        <p className="w-fit bg-[var(--secondary-color)] font-semibold sm:mr-4 ">Session length (minutes)</p>
                        <div>
                            <input 
                                type="radio"
                                id="30-mins"
                                name="sessionLength"
                                value="30"
                                checked={sessionLength === "30"}
                                onChange={(e) => setSessionLength(e.target.value)}
                            />
                            <label htmlFor="30-mins" className={sessionLength === "30" ? "ml-2 mr-6 font-semibold" : "ml-2 mr-6"}>30</label>
                        </div>
                        <div>
                            <input 
                                type="radio"
                                id="60-mins"
                                name="sessionLength"
                                value="60"
                                checked={sessionLength === "60"}
                                onChange={(e) => setSessionLength(e.target.value)}
                            />
                            <label htmlFor="60-mins" className={sessionLength === "60" ? "ml-2 mr-6 font-semibold" : "ml-2 mr-6"}>60</label>
                        </div>
                        <div>
                            <input 
                                type="radio"
                                id="90-mins"
                                name="sessionLength"
                                value="90"
                                checked={sessionLength === "90"}
                                onChange={(e) => setSessionLength(e.target.value)}
                            />
                            <label htmlFor="90-mins" className={sessionLength === "90" ? "ml-2 mr-6 font-semibold" : "ml-2 mr-6"}>90</label>
                        </div>
                        <div>
                            <input 
                                type="radio"
                                id="120-mins"
                                name="sessionLength"
                                value="120"
                                checked={sessionLength === "120"}
                                onChange={(e) => setSessionLength(e.target.value)}
                            />
                            <label htmlFor="120-mins" className={sessionLength === "120" ? "ml-2 mr-6 font-semibold" : "ml-2 mr-6"}>120</label>
                        </div>
                    </div>

                    {/* Session start time */}
                    <div className="flex">
                        <label htmlFor="start-time" className="w-[150px] font-semibold">Start time</label>
                        <select 
                            id="start-time"
                            onChange={e => setStartTime(e.target.value)}
                            value={startTime}
                            className="w-[160px] text-center"
                            required
                        >
                            <option value="">Choose Time</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                        </select>
                    </div>
                    
                    {/* Session finish time */}
                    <div className="flex">
                        <label htmlFor="finish-time" className="w-[150px] font-semibold">Finish time</label>
                        <select 
                            id="finish-time"
                            onChange={e => setFinishTime(e.target.value)}
                            value={finishTime}
                            className="w-[160px] text-center"
                            required
                        >
                            <option value="">{startTime == "" ? "Pick a Start Time" : "Choose Time"}</option>
                            {finishTimeOptions}
                        </select>
                    </div>
                </fieldset>
                <button className={validationPassed ? "mx-2 my-4 border-2 text-xl font-bold" : "mx-2 my-4 border-2 text-xl font-bold bg-[var(--primary-alt-color)]"}>Generate Schedule</button>
              </form>
        </>
    )
} 