import { useState } from "react"
import IntervalSelect from "./IntervalSelect"

export default function IntervalMenu(props) {
    const { handleCloseIntervalMenu, selectedIntervals, setSelectedIntervals } = props
    
    return (
        <div className="settings-container">
            <div className="speed-header">
                <i className="fa-solid fa-angle-left blue" onClick={handleCloseIntervalMenu}></i>
                <p className="center">Intervals</p>
            </div>
            <div className="setting-group">
                <IntervalSelect title={'Unison/Octaves'} 
                    interval={'unison'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
                <div className="separator" />
                <IntervalSelect title={'Major/Minor 2nds'} 
                    interval={'seconds'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
                <div className="separator" />
                <IntervalSelect title={'Major/Minor 3rds'} 
                    interval={'thirds'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
                <div className="separator" />
                <IntervalSelect title={'4ths/5ths/Tritones'} 
                    interval={'fourths'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
                <div className="separator" />
                <IntervalSelect title={'Major/Minor 6ths'} 
                    interval={'sixths'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
                <div className="separator" />
                <IntervalSelect title={'Major/Minor 7ths'} 
                    interval={'sevenths'} 
                    selectedIntervals={selectedIntervals} 
                    setSelectedIntervals={setSelectedIntervals}/>
            </div>
        </div>

    )
}