export const intervalSources = [
    './src/assets/C5.wav',
    './src/assets/Db5.wav',
    './src/assets/D5.wav',
]

export function createRandomInterval(selectedIntGroups) {
    const possibleIndexDistance = []
    if ((selectedIntGroups || []).includes('unision')) {
        possibleIndexDistance.push(0, 12)
    }
    if ((selectedIntGroups || []).includes('seconds')) {
        possibleIndexDistance.push(1, 2)
    }
    if ((selectedIntGroups || []).includes('thirds')) {
        possibleIndexDistance.push(3, 4)
    }
    if ((selectedIntGroups || []).includes('fourths')) {
        possibleIndexDistance.push(5, 6, 7)
    }
    if ((selectedIntGroups || []).includes('sixths')) {
        possibleIndexDistance.push(8, 9)
    }
    if ((selectedIntGroups || []).includes('sevenths')) {
        possibleIndexDistance.push(10, 11)
    }
    const endingPitchDistance = possibleIndexDistance[Math.floor(Math.random() * possibleIndexDistance.length)]

    const startingPitchIndex = 0
    const endingPitchIndex = startingPitchIndex + endingPitchDistance

    return [startingPitchIndex, endingPitchIndex]
}