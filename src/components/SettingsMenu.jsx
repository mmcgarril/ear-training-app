import { useState } from "react"

export default function SettingsMenu(props) {
    const { handleOpenSpeedMenu, handleOpenIntervalMenu, handleResetScore} = props
    const [ isResetShowing, setIsResetShowing ] = useState(false)

    function handleClick() {
        setIsResetShowing(!isResetShowing)
    }

    return (
        <div className="settings-container">
            <div className="settings-header">
                <p>Settings</p>
            </div>
            <div className="setting-group">
                <div id="intervals-button" className="setting-button" onClick={handleOpenIntervalMenu}>
                    <p>Intervals</p>
                    <div>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div className="separator" />
                <div id="speed-button" className="setting-button" onClick={handleOpenSpeedMenu}>
                    <p>Speed</p>
                    <div>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div className="setting-group">
                <div id="reset-score-button" className="setting-button" onClick={handleClick}>
                    <p>Reset Score</p>
                    <i className={`fa-solid fa-eraser ${!isResetShowing ? '' : ''}`}></i>
                    <div className={`reset ${isResetShowing ? 'slide-left' : ''}`} onClick={handleResetScore}>Reset</div>
                </div>
                
            </div>
        </div>

    )
}