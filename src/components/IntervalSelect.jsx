export default function IntervalSelect(props) {
    const { title, interval, selectedIntervals, setSelectedIntervals } = props

    function handleToggleSelectedInterval() {
        if (selectedIntervals.includes(interval)) {
            setSelectedIntervals(selectedIntervals.filter(i => i !== interval))
        } else {
            setSelectedIntervals([...selectedIntervals, interval])
        }
    }

    return (
        <div className="setting-button" onClick={handleToggleSelectedInterval}>
            <p>{title}</p>
            <div>  
                {(selectedIntervals || []).includes(interval) ?
                <i className="fa-solid fa-circle-check blue"></i> :
                <i className="fa-regular fa-circle blue"></i>
                }
            </div>
        </div>
    )
}