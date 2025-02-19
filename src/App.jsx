import { useState } from "react"
import Header from "./components/Header"
import Quiz from "./components/Quiz"
import Modal from "./components/Modal"
import SettingsMenu from "./components/SettingsMenu"
import SpeedMenu from "./components/SpeedMenu"

function App() {
  const [ showModal, setShowModal ] = useState(false) 
  const [ showSettings, setShowSettings ] = useState(true)
  const [ showSpeedMenu, setShowSpeedMenu ] = useState(false)
  const [ speedSelection, setSpeedSelection ] = useState('slow')

  function handleCloseModal() {
    setShowModal(false)
  }

  function handleOpenModal() {
    setShowModal(true)
  }

  function handleCloseSpeedMenu() {
    setShowSettings(true)
    setShowSpeedMenu(false)
  }

  function handleOpenSpeedMenu() {
    setShowSettings(false)
    setShowSpeedMenu(true)
  }

  return (
    <>
      {showModal && 
        <Modal handleCloseModal={handleCloseModal}>
          {showSettings &&
            <SettingsMenu title="Settings" handleOpenSpeedMenu={handleOpenSpeedMenu}/>
          }
          {showSpeedMenu &&
            <SpeedMenu title="Speed" 
            handleCloseSpeedMenu={handleCloseSpeedMenu} 
            speedSelection={speedSelection}
            setSpeedSelection={setSpeedSelection} />
          }
        </Modal>
      }
      <Header handleOpenModal={handleOpenModal} />
      <Quiz speedSelection={speedSelection} />
    </>
  )
}

export default App
