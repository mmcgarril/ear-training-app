import { useState } from "react"
import Header from "./components/Header"
import Quiz from "./components/Quiz"
import Modal from "./components/Modal"
import Settings from "./components/Settings"

function App() {
  const [ showSettings, setShowSettings ] = useState(true)

  function handleCloseSettings() {
    setShowSettings(false)
  }

  function handleOpenSettings() {
    setShowSettings(true)
  }

  return (
    <>
      {showSettings && 
        <Modal handleCloseSettings={handleCloseSettings}>
          <Settings />
        </Modal>
      }
      <Header handleOpenSettings={handleOpenSettings} />
      <Quiz />
    </>
  )
}

export default App
