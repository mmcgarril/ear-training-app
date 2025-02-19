import { useState } from 'react'
import { intervalSources } from '../utils'

export default function Quiz() {
    const [ clicked, setClicked ] = useState(false)

    function handlePlayButton() {
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 4000)
        playAudio()
    }

    function playAudio() {
        document.getElementById('audio1').play()
        setTimeout(() => {
            document.getElementById('audio2').play()
        }, 2000)
    }

    return (
        <>
            <div className="quiz-container">
                <audio id="audio1" controls>
                    <source src={intervalSources[0]} />
                </audio>
                <audio id="audio2" controls>
                    <source src="./src/assets/D5.mp3" />
                </audio>
                <div className="playback-container">
                    <i className="fa-solid fa-play" onClick={handlePlayButton}></i>
                    <div className="playback-line">
                        <div className={`playback-active-line ${clicked ? 'playing disable' : ''}`} />
                    </div>
                </div>
                <div className="quiz-row right">
                    <button className="answer-card">Unison</button>
                </div>
                <div className="quiz-row">
                    <button className="answer-card">Minor 2nd</button>
                    <button className="answer-card">Major 2nd</button>
                </div>
                <div className="quiz-row">
                    <button className="answer-card">Minor 3rd</button>
                    <button className="answer-card">Major 3rd</button>
                </div>
                <div className="quiz-row right">
                    <button className="answer-card">Perfect 4th</button>
                </div>
                <div className="quiz-row">
                    <button className="answer-card">Tritone</button>
                </div>
                <div className="quiz-row right">
                    <button className="answer-card">Perfect 5th</button>
                </div>
                <div className="quiz-row">
                    <button className="answer-card">Minor 6th</button>
                    <button className="answer-card">Major 6th</button>
                </div>     
                <div className="quiz-row">
                    <button className="answer-card">Minor 7th</button>
                    <button className="answer-card">Major 7th</button>
                </div>  
                <div className="quiz-row right">
                    <button className="answer-card">Octave</button>
                </div>               
            </div>
            <div className="score-container">
                <p>Score:</p>
                <p>0/0</p>
                <p>100%</p>
            </div>
        </>
    )
}