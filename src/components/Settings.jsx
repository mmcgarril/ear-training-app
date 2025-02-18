import SettingsButton from "./SettingsButton.jsx";

export default function Settings(props) {
const { isOpen } = props

    return (
        <div className="settings-container">
            <div className="settings-header">
                <p>Settings</p>
            </div>
            <SettingsButton title={'Intervals'}/>
            <SettingsButton title={'Speed'}/>
        </div>
    )
}