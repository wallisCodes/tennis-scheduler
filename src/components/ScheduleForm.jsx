import React, { useState } from "react"

export default function ScheduleForm({courts, setCourts, algorithm, setAlgorithm, startTime, setStartTime, endTime, setEndTime}){
    function handleCourts(event){
        const {name, checked} = event.target;
        setCourts(prevCourts => {
            return {
              ...prevCourts,
              [name]: checked
            }
         })
    }

    function handleSubmit(event){
        event.preventDefault();
        // generateSchedule(players, courts, algorithm);
        console.log(`Current algorithm: ${algorithm}`);
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
                    />
                    <label htmlFor="teams">Teams</label>
                    <br />

                    <input 
                        type="radio"
                        id="seeded"
                        name="algorithm"
                        value="seeded"
                        checked={algorithm === "seeded"}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        disabled
                    />
                    <label htmlFor="seeded">Seeded (coming soon)</label>
                    <br />
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
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                        </select>
                    </div>

                    <div className="flex">
                        <label htmlFor="end-time" className="">End time</label>
                        <select 
                            id="end-time"
                            onChange={e => setEndTime(e.target.value)}
                            value={endTime}
                            className=""
                            required
                        >
                            <option value="">Choose Time</option>
                            <option value="08:30">08:30</option>
                            <option value="09:30">09:30</option>
                            <option value="10:30">10:30</option>
                            <option value="18:30">18:30</option>
                            <option value="19:30">19:30</option>
                        </select>
                    </div>
                </fieldset>
                
                <button className="border">Generate Schedule</button>
              </form>
        </>
    )
} 