import React, { useState } from "react"

export default function ScheduleForm({courts, setCourts, algorithm, setAlgorithm, startTime, setStartTime,
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
    
    const sessionsUntilLastTime = minutesUntilLastTime(startTime) / 30;
    const potentialFinishTimes = [];

    for (let i = 1; i <= sessionsUntilLastTime; i++){
        let timeOption = convertToTime(convertToMinutes(startTime) + i * 30);
        // console.log(`time option: ${timeOption}`);
        potentialFinishTimes.push(timeOption);
    }
    // console.log(`finish time options: ${JSON.stringify(potentialFinishTimes)}`);
    const finishTimeOptions = potentialFinishTimes.map((timeOption, index) => <option key={index}>{timeOption}</option>);


    function handleSubmit(event){
        event.preventDefault();
        // generateSchedule(players, courts, algorithm);
        console.log(`Current algorithm: ${algorithm}`);
        setShowSchedule(true);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Court checkboxes */}
                <fieldset>
                    <legend>Choose courts</legend>
                    <div className="space-x-2">
                        <label htmlFor="court-1">1</label>
                        <input 
                            type="checkbox"
                            id="court-1"
                            onChange={handleCourts}
                            name="Court 1"
                            checked={courts["Court 1"]}
                            className=""
                        />
                        
                        <label htmlFor="court-2">2</label>
                        <input 
                            type="checkbox"
                            id="court-2"
                            onChange={handleCourts}
                            name="Court 2"
                            checked={courts["Court 2"]}
                            className=""
                        />
                        
                        <label htmlFor="court-3">3</label>
                        <input 
                            type="checkbox"
                            id="court-3"
                            onChange={handleCourts}
                            name="Court 3"
                            checked={courts["Court 3"]}
                            className=""
                        />
                        
                        <label htmlFor="court-4">4</label>
                        <input 
                            type="checkbox"
                            id="court-4"
                            onChange={handleCourts}
                            name="Court 4"
                            checked={courts["Court 4"]}
                            className=""
                        />
                        
                        <label htmlFor="court-5">5</label>
                        <input 
                            type="checkbox"
                            id="court-5"
                            onChange={handleCourts}
                            name="Court 5"
                            checked={courts["Court 5"]}
                            className=""
                        />
                        
                        <label htmlFor="court-6">6</label>
                        <input 
                            type="checkbox"
                            id="court-6"
                            onChange={handleCourts}
                            name="Court 6"
                            checked={courts["Court 6"]}
                            className=""
                        />
                    </div>
                </fieldset>
                

                {/* Algorithm types */}
                <fieldset>
                    <legend>Scheduling algorithm</legend>
                    <input 
                        type="radio"
                        id="random"
                        name="algorithm"
                        value="random"
                        checked={algorithm === "random"}
                        onChange={(e) => setAlgorithm(e.target.value)}
                    />
                    <label htmlFor="random">Random</label>
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
                    <label htmlFor="teams">Teams (coming soon)</label>
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
                <fieldset>
                    <legend>Pick a time range</legend>
                    <div className="flex">
                        <label htmlFor="start-time" className="">Start time</label>
                        <select 
                            id="start-time"
                            onChange={e => setStartTime(e.target.value)}
                            value={startTime}
                            className=""
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

                    <div className="flex">
                        <label htmlFor="finish-time" className="">Finish time</label>
                        <select 
                            id="finish-time"
                            onChange={e => setFinishTime(e.target.value)}
                            value={finishTime}
                            className=""
                            required
                        >
                            <option value="">{startTime == "" ? "Pick a Start Time" : "Choose Time"}</option>
                            {finishTimeOptions}
                        </select>
                    </div>
                </fieldset>
                
                <button className="border">Generate Schedule</button>
              </form>
        </>
    )
} 