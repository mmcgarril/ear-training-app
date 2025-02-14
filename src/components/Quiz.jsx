export default function Quiz() {
    return (
        <>
            <div className="quiz-container">
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
        </>
    )
}