export default function SettingsButton(props) {
    const { title, value } = props

    return (
        <div className="settings-button">
            <p>{title}</p>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    )
}