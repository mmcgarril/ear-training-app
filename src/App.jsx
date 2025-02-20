import { useState } from "react"
import Header from "./components/Header"
import Quiz from "./components/Quiz"
import Modal from "./components/Modal"
import SettingsMenu from "./components/SettingsMenu"
import SpeedMenu from "./components/SpeedMenu"
import IntervalMenu from "./components/IntervalMenu"

function App() {
  const [ showModal, setShowModal ] = useState(false) 
  const [ showSettings, setShowSettings ] = useState(true)
  const [ showIntervalMenu, setShowIntervalMenu ] = useState(false)
  const [ selectedIntervals, setSelectedIntervals ] = useState(['seconds'])
  const [ showSpeedMenu, setShowSpeedMenu ] = useState(false)
  const [ speedSelection, setSpeedSelection ] = useState('slow')

  function handleCloseModal() {
    setShowModal(false)
  }

  function handleOpenModal() {
    setShowModal(true)
  }

  function handleCloseIntervaldMenu() {
    setShowSettings(true)
    setShowIntervalMenu(false)
  }

  function handleOpenIntervalMenu() {
    setShowSettings(false)
    setShowIntervalMenu(true)
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
            <SettingsMenu title="Settings"
            handleOpenSpeedMenu={handleOpenSpeedMenu}
            handleOpenIntervalMenu={handleOpenIntervalMenu} />
          }
          {showIntervalMenu &&
            <IntervalMenu handleCloseIntervalMenu={handleCloseIntervaldMenu}
              selectedIntervals={selectedIntervals}
              setSelectedIntervals={setSelectedIntervals} />
          }
          {showSpeedMenu &&
            <SpeedMenu
            handleCloseSpeedMenu={handleCloseSpeedMenu} 
            speedSelection={speedSelection}
            setSpeedSelection={setSpeedSelection} />
          }
        </Modal>
      }
      <Header handleOpenModal={handleOpenModal} />
      <Quiz selectedIntervals={selectedIntervals} speedSelection={speedSelection} />
    </>
  )
}

export default App
