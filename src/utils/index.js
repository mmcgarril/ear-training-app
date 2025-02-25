export const intervalSources = [
    './src/assets/A4.wav',
    './src/assets/Bb4.wav',
    './src/assets/B4.wav',
    './src/assets/C4.wav',
    './src/assets/Db4.wav',
    './src/assets/D4.wav',
    './src/assets/Eb4.wav',
    './src/assets/E4.wav',
    './src/assets/F4.wav',
    './src/assets/Fsharp4.wav',
    './src/assets/G4.wav',
    './src/assets/Ab5.wav',
    './src/assets/A5.wav',
    './src/assets/Bb5.wav',
    './src/assets/B5.wav',
    './src/assets/C5.wav',
    './src/assets/Db5.wav',
    './src/assets/D5.wav',
    './src/assets/Eb5.wav',
    './src/assets/E5.wav',
    './src/assets/F5.wav',
    './src/assets/Fsharp5.wav',
    './src/assets/G5.wav',
    './src/assets/Ab6.wav',
    './src/assets/A6.wav',
    './src/assets/Bb6.wav',
    './src/assets/B6.wav',
    './src/assets/C6.wav',
]

export const intervalInfo = {
    0: {title: 'Unison', group: 'unison'},
    1: {title: 'Minor 2nd', group: 'seconds'},
    2: {title: 'Major 2nd', group: 'seconds'},
    3: {title: 'Minor 3rd', group: 'thirds'},
    4: {title: 'Major 3rd', group: 'thirds'},
    5: {title: 'Perfect 4th', group: 'fourths'},
    6: {title: 'Tritone', group: 'fourths'},
    7: {title: 'Perfect 5th', group: 'fourths'},
    8: {title: 'Minor 6th', group: 'sixths'},
    9: {title: 'Major 6th', group: 'sixths'},
    10: {title: 'Minor 7th', group: 'sevenths'},
    11: {title: 'Major 7th', group: 'sevenths'},
    12: {title: 'Octave', group: 'unison'},
}

export function createPossibleAnswers(selectedIntGroups) {
    const possibleIndexDistance = []
    if ((selectedIntGroups || []).includes('unison')) {
        possibleIndexDistance.push(0, 12, -12)
    }
    if ((selectedIntGroups || []).includes('seconds')) {
        possibleIndexDistance.push(1, -1, 2, -2)
    }
    if ((selectedIntGroups || []).includes('thirds')) {
        possibleIndexDistance.push(3, -3, 4, -4)
    }
    if ((selectedIntGroups || []).includes('fourths')) {
        possibleIndexDistance.push(5, -5, 6, -6, 7, -7)
    }
    if ((selectedIntGroups || []).includes('sixths')) {
        possibleIndexDistance.push(8, -8, 9, -9)
    }
    if ((selectedIntGroups || []).includes('sevenths')) {
        possibleIndexDistance.push(10, -10, 11, -11)
    }
    
    return possibleIndexDistance
}

export const clipDuration = {
    slow: 1000,
    medium: 500,
    fast: 250,
    lightning: 125
}