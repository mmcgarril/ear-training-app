import { useEffect } from "react"
import { useTheme } from "../context/ThemeContext"

export default function Header(props) {
    const { handleOpenModal } = props
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme)
    }, [theme])

    return (
        <>
            <div className="header">
                <div className="dark-mode">
                    <p>dark mode</p>
                    <label className="toggle-switch">
                        <input type="checkbox" onClick={toggleTheme}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <p>Hear It First</p>
                <i className="fa-solid fa-gear" onClick={handleOpenModal}></i>
            </div>
        </>
    )
}