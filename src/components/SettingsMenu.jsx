export default function SettingsMenu(props) {
    const { handleOpenSpeedMenu, handleOpenIntervalMenu } = props
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
        </div>

    )
}