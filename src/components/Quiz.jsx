import { useState } from 'react'
import { intervalSources } from '../utils'

export default function Quiz(props) {
    const { selectedIntevals, setSelectedIntervals, speedSelection } = props
    const [ isPlaying, setIsPlaying ] = useState(false)

    const clipDuration = {
        slow: 1000,
        medium: 500,
        fast: 250,
        lightning: 125
    }

    
    function handlePlayButton() {
        const audioPlayer1 = document.getElementById('audio1')
        const audioPlayer2 = document.getElementById('audio2')
        
        if (!isPlaying) {
            setIsPlaying(true)
            //play audio1
            audioPlayer1.play()
            //pause and reset audio1 to 0 after clip duration
            setTimeout(() => {
                audioPlayer1.pause()
                audioPlayer1.currentTime = 0
            }, clipDuration[speedSelection])
            //play audio2 after clip duration
            setTimeout(() => {
                audioPlayer2.play()
            }, clipDuration[speedSelection])
            //pause and reset audio2 to 0 after twice the clip duration
            setTimeout(() => {
                audioPlayer2.pause()
                audioPlayer2.currentTime = 0
            }, (clipDuration[speedSelection] * 2))
            //reset isPlaying to false after twice the clip duration
            setTimeout(() => {
                setIsPlaying(false)
            }, (clipDuration[speedSelection] * 2))
        }
    }

    return (
        <>
            <div className="quiz-container">
                <audio id="audio1">
                    <source src={intervalSources[0]} />
                </audio>
                <audio id="audio2">
                    <source src={intervalSources[1]} />
                </audio>
                <div className="playback-container">
                    <i className="fa-solid fa-play" onClick={handlePlayButton}></i>
                    <div className="playback-line">
                        <div className={`playback-active-line ${isPlaying ? speedSelection : ''}`} />
                    </div>
                </div>
                <div className="quiz-row">
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