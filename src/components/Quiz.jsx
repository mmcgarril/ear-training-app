import { useEffect, useState } from 'react'
import { clipDuration, createPossibleAnswers, intervalSources } from '../utils'
import { AnswerButton } from './AnswerButton'

export default function Quiz(props) {
    const { selectedIntervals, setSelectedIntervals, speedSelection } = props
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ intAnswer, setIntAnswer ] = useState(null) 
    const [ startingPitch, setStartingPitch ] = useState(null)
    const [ endingPitch, setEndingPitch ] = useState(null)
    const [ guessesCorrect, setGuessesCorrect ] = useState(0)
    const [ guessesTotal, setGuessesTotal ] = useState(0)
    const [ clickedAnsButtons, setClickedAnsButtons ] = useState([])
    const [ disabledAnsButtons, setDisabledAnsButtons ] = useState([])
    const [ isCorrect, setIsCorrect ] = useState(false)

    function handlePlayButton() {
        const audioPlayer1 = document.getElementById('audio1')
        const audioPlayer2 = document.getElementById('audio2')
        
        if (!isPlaying) {
            setIsPlaying(true)
            audioPlayer1.load()
            audioPlayer2.load()
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
            //reset isPlaying to false after twice the clip duration, plus buffer time to avoid play/pause err
            setTimeout(() => {
                setIsPlaying(false)
            }, (clipDuration[speedSelection] * 2 + 20))
        }
    }

    function generateNewStartingPitch() {
        const newStartPitch = Math.floor(Math.random() * intervalSources.length)
        setStartingPitch(newStartPitch)
    }

    function generateNewAnswer() {    
        const possibleAnsArray = createPossibleAnswers(selectedIntervals)   
        const randomIndex = Math.floor(Math.random() * possibleAnsArray.length)
        const answer = possibleAnsArray[randomIndex]
        setIntAnswer(answer)
    }

    //each guess, update total (and correct) guesses, change button styling and disable, and begin next interval if correct
    function handleGuess(btnValue) {
        const prevTotalCount = guessesTotal
        setGuessesTotal(prevTotalCount + 1)
        
        setClickedAnsButtons([...clickedAnsButtons, btnValue])

        if (btnValue == intAnswer) {
            const prevCorrectCount = guessesCorrect
            setGuessesCorrect(prevCorrectCount + 1)
            setIsCorrect(true)

            setTimeout(() => {
                setIsCorrect(false)
                setClickedAnsButtons([])
                generateNewStartingPitch()
                generateNewAnswer()
            }, 2000)
        } else {
            
        }
    }

    //initialze interval groups to all on page load
    useEffect(() => {
        setSelectedIntervals(['unison', 'seconds', 'thirds', 'fourths', 'sixths', 'sevenths'])

    }, [])

    //listen for changes to interval groups (on page load and when user interacts with interval menu), create start pitch and answer
    useEffect(() => {
        generateNewStartingPitch()
        generateNewAnswer()
    }, [selectedIntervals])

    //make sure the ending pitch will not go out of range when start pitch and answer int are assigned
    useEffect(() => {
        if ((startingPitch + intAnswer) > (intervalSources.length - 1)) {
            generateNewStartingPitch()
            generateNewAnswer()
        } else {
            setEndingPitch((startingPitch + intAnswer))
        }
    }, [intAnswer])

    return (
        <>
            <div className="quiz-container">
                <audio id="audio1" key="1" >
                    <source src={intervalSources[startingPitch]} />
                </audio>
                {/* NEED A KEY PROPERTY IN ORDER FOR AUDIO SRC TO UPDATE!! */}
                <audio id="audio2" key="2" >
                    <source src={intervalSources[endingPitch]} />
                </audio>
                <div className="playback-container">
                    <i className="fa-solid fa-play" onClick={handlePlayButton}></i>
                    <div className="playback-line">
                        <div className={`playback-active-line ${isPlaying ? speedSelection : ''}`} />
                    </div>
                </div>
                <div className="correct-box">{isCorrect ? 'Correct!' : ''} {startingPitch} {endingPitch} {intAnswer}</div>
                <div className="quiz-row right">
                    <AnswerButton value={0}
                        selectedIntervals={selectedIntervals}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton title={'Minor 2nd'} value={1} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'seconds'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    {/* <button value="1" className="answer-card" onClick={handleGuess}>Minor 2nd</button> */}
                    <AnswerButton title={'Major 2nd'} value={2} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'seconds'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    {/* <button className="answer-card">Major 2nd</button> */}
                </div>
                <div className="quiz-row">
                    <AnswerButton title={'Minor 3rd'} value={3} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'thirds'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton title={'Major 3rd'} value={4} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'thirds'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row right">
                    <AnswerButton title={'Perfect 4th'} value={5} right={'right'}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'fourths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton title={'Tritone'} value={6} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'fourths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton title={'Perfect 5th'} value={7} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'fourths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>
                <div className="quiz-row">
                    <AnswerButton title={'Minor 6th'} value={8} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'sixths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton title={'Major 6th'} value={9} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'sixths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>     
                <div className="quiz-row">
                    <AnswerButton title={'Minor 7th'} value={10} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'sevenths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                    <AnswerButton title={'Major 6th'} value={11} right={''}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'sevenths'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>  
                <div className="quiz-row right">
                    <AnswerButton title={'Octave'} value={12} right={'right'}
                        selectedIntervals={selectedIntervals}
                        intervalGroup={'unison'}
                        intAnswer={intAnswer}
                        handleGuess={handleGuess}
                        clickedAnsButtons={clickedAnsButtons} />
                </div>               
            </div>
            <div className="score-container">
                <p>Score:</p>
                <p>{`${guessesCorrect}/${guessesTotal}`}</p>
                <p>100%</p>
            </div>
        </>
    )
}