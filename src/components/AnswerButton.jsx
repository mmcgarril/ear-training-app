import { useEffect, useState } from "react"
import { intervalInfo } from "../utils"

export function AnswerButton(props) {
    const {value, selectedIntervals, intAnswer, handleGuess, clickedAnsButtons} = props

    const info = intervalInfo[value]

    const disabled = !selectedIntervals.includes(info.group)
    const clicked = clickedAnsButtons.includes(value)

    return (
        <>
            <button className={`answer-card ${disabled || clicked ? 'empty' : ''}
                ${!clickedAnsButtons.includes(value) ? '' : intAnswer == value ? 'green-button' : 'red-button'}`} 
                disabled={disabled || clicked}
                value={value} onClick={() => handleGuess(value)}>{info.title}</button>
        </>
    )
}