import React, { useState } from "react"

export default function ScheduleForm({courts, setCourts, algorithm, setAlgorithm}){
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
                <div className="space-x-2">
                    <label htmlFor="court-1">1</label>
                    <input 
                        type="checkbox"
                        id="court-1"
                        onChange={handleCourts}
                        name="one"
                        checked={courts.one}
                        className=""
                    />
                    
                    <label htmlFor="court-2">2</label>
                    <input 
                        type="checkbox"
                        id="court-2"
                        onChange={handleCourts}
                        name="two"
                        checked={courts.two}
                        className=""
                    />
                    
                    <label htmlFor="court-3">3</label>
                    <input 
                        type="checkbox"
                        id="court-3"
                        onChange={handleCourts}
                        name="three"
                        checked={courts.three}
                        className=""
                    />
                    
                    <label htmlFor="court-4">4</label>
                    <input 
                        type="checkbox"
                        id="court-4"
                        onChange={handleCourts}
                        name="four"
                        checked={courts.four}
                        className=""
                    />
                    
                    <label htmlFor="court-5">5</label>
                    <input 
                        type="checkbox"
                        id="court-5"
                        onChange={handleCourts}
                        name="five"
                        checked={courts.five}
                        className=""
                    />
                    
                    <label htmlFor="court-6">6</label>
                    <input 
                        type="checkbox"
                        id="court-6"
                        onChange={handleCourts}
                        name="six"
                        checked={courts.six}
                        className=""
                    />
                </div>

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
                
                <button className="border">Generate Schedule</button>
              </form>
        </>
    )
} 