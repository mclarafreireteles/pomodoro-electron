import './time.style.css'

interface TimeProps {
    time: number;
}

export function Time({ time }: TimeProps){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formatedMinutes = String(minutes).padStart(2, '0');
    const formatedSeconds = String(seconds).padStart(2, '0');
    
    return (
        <h1 className="time-text">{formatedMinutes}:{formatedSeconds}</h1>
    )
}