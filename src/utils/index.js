export const intervalSources = [
    '/assets/A4.mp3',
    '/assets/Bb4.mp3',
    '/assets/B4.mp3',
    '/assets/C4.mp3',
    '/assets/Db4.mp3',
    '/assets/D4.mp3',
    '/assets/Eb4.mp3',
    '/assets/E4.mp3',
    '/assets/F4.mp3',
    '/assets/Fsharp4.mp3',
    '/assets/G4.mp3',
    '/assets/Ab5.mp3',
    '/assets/A5.mp3',
    '/assets/Bb5.mp3',
    '/assets/B5.mp3',
    '/assets/C5.mp3',
    '/assets/Db5.mp3',
    '/assets/D5.mp3',
    '/assets/Eb5.mp3',
    '/assets/E5.mp3',
    '/assets/F5.mp3',
    '/assets/Fsharp5.mp3',
    '/assets/G5.mp3',
    '/assets/Ab6.mp3',
    '/assets/A6.mp3',
    '/assets/Bb6.mp3',
    '/assets/B6.mp3',
    '/assets/C6.mp3',
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