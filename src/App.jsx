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
  const [ selectedIntervals, setSelectedIntervals ] = useState([])
  const [ showSpeedMenu, setShowSpeedMenu ] = useState(false)
  const [ speedSelection, setSpeedSelection ] = useState('medium')
  const [ guessesCorrect, setGuessesCorrect ] = useState(0)
  const [ guessesTotal, setGuessesTotal ] = useState(0)

  function handleCloseModal() {
    //guard clause to remind user not to leave selected groups empty, leave modal open and set to interval menu
    if (selectedIntervals.length == 0) {
      handleCloseSpeedMenu()
      handleOpenIntervalMenu()
      alert('Select at least one interval group')
      return
    }
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

  function handleResetScore() {
    setGuessesCorrect(0)
    setGuessesTotal(0)
    handleCloseModal()
  }

  return (
    <>
      {showModal && 
        <Modal handleCloseModal={handleCloseModal}>
          {showSettings &&
            <SettingsMenu title="Settings"
              handleOpenSpeedMenu={handleOpenSpeedMenu}
              handleOpenIntervalMenu={handleOpenIntervalMenu} 
              handleResetScore={handleResetScore} />
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
      <Quiz selectedIntervals={selectedIntervals} setSelectedIntervals={setSelectedIntervals}
        speedSelection={speedSelection} guessesCorrect={guessesCorrect} setGuessesCorrect={setGuessesCorrect}
        guessesTotal={guessesTotal} setGuessesTotal={setGuessesTotal}
         />
    </>
  )
}

export default App
