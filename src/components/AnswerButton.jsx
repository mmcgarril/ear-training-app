import { useEffect, useState } from "react"

export function AnswerButton(props) {
    const { title, value, right, selectedIntervals, intervalGroup, intAnswer, handleGuess, clickedAnsButtons} = props

    return (
        <>
            <button className={`answer-card ${!selectedIntervals.includes(intervalGroup) ? 'disabled empty' : ''}
                ${clickedAnsButtons.includes(value) ? 'red-button' : 'grey-button'}
                ${right}`} value={value} onClick={() => handleGuess(value)}>{title}</button>
        </>
    )
}