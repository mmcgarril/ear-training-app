export default function SettingsMenu(props) {
    const { handleOpenSpeedMenu } = props
    return (
        <div className="settings-container">
            <div className="settings-header">
                <p>Settings</p>
            </div>
            <div className="setting-group">
                <div id="intervals-button" className="setting-button">
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