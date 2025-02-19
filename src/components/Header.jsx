export default function Header(props) {
const { handleOpenModal } = props

    return (
        <>
            <div className="header">
                <i className="fa-solid fa-house"></i>
                    <p>Hear It First</p>
                <i className="fa-solid fa-gear" onClick={handleOpenModal}></i>
            </div>
        </>
    )
}