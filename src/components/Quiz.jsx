import { useEffect, useState } from 'react'
import { clipDuration, createPossibleAnswers, intervalSources } from '../utils'
import { AnswerButton } from './AnswerButton'

export default function Quiz(props) {
    const { selectedIntervals, setSelectedIntervals, speedSelection,
        guessesCorrect, setGuessesCorrect, guessesTotal, setGuessesTotal } = props
        
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ startingPitch, setStartingPitch ] = useState(null)
    const [ intAnswer, setIntAnswer ] = useState(null) 
    const [ endingPitch, setEndingPitch ] = useState(null)
    const [ clickedAnsButtons, setClickedAnsButtons ] = useState([])
    const [ isCorrect, setIsCorrect ] = useState(false)

    const percentage = Math.round(guessesCorrect/guessesTotal * 100)

    function handlePlayButton() {
        if (isCorrect) { return }
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
            }, clipDuration[speedSelection] + 20)
            //play audio2 after clip duration
            setTimeout(() => {
                audioPlayer2.play()
            }, clipDuration[speedSelection] + 20)
            //pause and reset audio2 to 0 after twice the clip duration
            setTimeout(() => {
                audioPlayer2.pause()
                audioPlayer2.currentTime = 0
            }, (clipDuration[speedSelection] * 2) + 40)
            //reset isPlaying to false after twice the clip duration, plus buffer time to avoid play/pause err
            setTimeout(() => {
                setIsPlaying(false)
            }, (clipDuration[speedSelection] * 2 + 40))
        }
    }

    function generateNewPitches() {
        const newStartPitch = Math.floor(Math.random() * intervalSources.length)

        //take selected int groups, create array with all possible intervals up or down, randomly select one
        const possibleAnsArray = createPossibleAnswers(selectedIntervals)
            const randomIndex = Math.floor(Math.random() * possibleAnsArray.length)
            const newAnswer = possibleAnsArray[randomIndex]
        
        const newEndingPitch = newStartPitch + newAnswer

        if (newEndingPitch > intervalSources.length -1 || newEndingPitch < 0) {
            generateNewPitches()
            return
        }

        setStartingPitch(newStartPitch)
        //intAnswer will be positive only
        setIntAnswer(Math.abs(newAnswer))
        setEndingPitch(newEndingPitch)
    }

    function handleGuess(btnValue) {
        const prevTotalCount = guessesTotal
        setGuessesTotal(prevTotalCount + 1)
        setClickedAnsButtons([...clickedAnsButtons, btnValue])

        //if guess is correct, set isCorrect to true momentarily to display 'correct-box', stlyle button green
        //then reset clicked buttons, set selectedInts (which creates a new question)
        if (btnValue == intAnswer) {
            const prevCorrectCount = guessesCorrect
            setGuessesCorrect(prevCorrectCount + 1)
            setIsCorrect(true)

            setTimeout(() => {
                setIsCorrect(false)
                setClickedAnsButtons([])
                setSelectedIntervals([...selectedIntervals])
            }, 1500)
        } else {
            
        }
    }

    //initialze interval groups to all on page load
    useEffect(() => {
        setSelectedIntervals(['unison', 'seconds', 'thirds', 'fourths', 'sixths', 'sevenths'])
    }, [])

    //listen for changes to interval groups (on page load and when user interacts with interval menu), create start pitch and answer
    useEffect(() => {
        generateNewPitches()
    }, [selectedIntervals])

    return (
        <>
            <div className="quiz-container">
                <audio id="audio1" key="1" preload="auto">
                    <source src={intervalSources[startingPitch]} />
                </audio>
                {/* NEED A KEY PROPERTY IN ORDER FOR AUDIO SRC TO UPDATE!! */}
                <audio id="audio2" key="2" preload="auto">
                    <source src={intervalSources[endingPitch]} />
                </audio>
                <div className="playback-container">
                    <i className="fa-solid fa-play" onClick={handlePlayButton}></i>
                    <div className="playback-line">
                        <div className={`playback-active-line ${isPlaying ? speedSelection : ''}`} />
                    </div>
                </div>
                <div className="correct-box">{isCorrect ? 'Correct!' : ''}</div>
                <div className="quiz-row right">
                    <AnswerButton value={0}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton value={1}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    {/* <button value="1" className="answer-card" onClick={handleGuess}>Minor 2nd</button> */}
                    <AnswerButton value={2}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    {/* <button className="answer-card">Major 2nd</button> */}
                </div>
                <div className="quiz-row">
                    <AnswerButton value={3}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton value={4}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row right">
                    <AnswerButton value={5}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton value={6}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton value={7}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton value={8}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton value={9}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>     
                <div className="quiz-row">
                    <AnswerButton value={10}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton value={11}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>  
                <div className="quiz-row right">
                    <AnswerButton value={12}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>               
            </div>
            <div className="score-container">
                <p>Score:</p>
                <p>{`${guessesCorrect}/${guessesTotal}`}</p>
                <p>{percentage ? `${percentage}%` : '0%'}</p>
            </div>
        </>
    )
}