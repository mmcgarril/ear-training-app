import { useState } from "react"

export default function SpeedMenu(props) {
    const { handleCloseSpeedMenu, speedSelection, setSpeedSelection } = props
    
    
    return (
        <div className="settings-container">
            <div className="speed-header">
                <i className="fa-solid fa-angle-left blue" onClick={handleCloseSpeedMenu}></i>
                <p className="center">Speed</p>
            </div>
            <div className="setting-group">
                <div className="setting-button" onClick={() => {setSpeedSelection('slow')}}>
                    <p>Slow</p>
                    <div>
                        {speedSelection == 'slow' &&
                            <i className="fa-solid fa-check blue"></i>
                        }
                    </div>
                </div>
                <div className="separator" />
                <div className="setting-button" onClick={() => {setSpeedSelection('medium')}}>
                    <p>Medium</p>
                    <div>
                    {speedSelection == 'medium' &&
                            <i className="fa-solid fa-check blue"></i>
                        }
                    </div>
                </div>
                <div className="separator" />
                <div className="setting-button" onClick={() => {setSpeedSelection('fast')}}>
                    <p>Fast</p>
                    <div>
                    {speedSelection == 'fast' &&
                            <i className="fa-solid fa-check blue"></i>
                        }
                    </div>
                </div>
                <div className="separator" />
                <div className="setting-button" onClick={() => {setSpeedSelection('lightning')}}>
                    <p>Lighting</p>
                    <div>
                    {speedSelection == 'lightning' &&
                            <i className="fa-solid fa-check blue"></i>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}