export default function Header(props) {
const { handleOpenSettings } = props

    return (
        <>
            <div className="header">
                <i class="fa-solid fa-house"></i>
                    <p>Hear It First</p>
                <i class="fa-solid fa-gear" onClick={handleOpenSettings}></i>
            </div>
        </>
    )
}