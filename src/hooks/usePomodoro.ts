import { useEffect, useState } from "react";

export type PomodoroMode = 'focus' | 'rest';

const POMODORO_TIMES = {
    focus: 25 * 60,
    rest: 5 * 60,
}

interface UsePomodoroReturn {
    time: number;
    isActive: boolean;
    mode: PomodoroMode;
    start: () => void;
    pause: () => void;
    reset: () => void;
    changeMode: (newMode: PomodoroMode) => void;
}

export function usePomodoro(): UsePomodoroReturn {
    const [mode, setMode] = useState<PomodoroMode>('focus');
    const [time, setTime] = useState<number>(POMODORO_TIMES.focus);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((t) => t - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setIsActive(false);
            setMode((previousMode) => (previousMode === 'focus' ? 'rest' : 'focus'))
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    useEffect(() => {
        setTime(POMODORO_TIMES[mode]);
        setIsActive(false);
    }, [mode]);

    const start = () => setIsActive(true);
    const pause = () => setIsActive(false);

    const reset = () => {
        setMode('focus');
        setTime(POMODORO_TIMES.focus);
        setIsActive(false);
    };

    const changeMode = (newMode: PomodoroMode) => {
        setMode(newMode);
    };

    return { time, isActive, mode, start, pause, reset, changeMode };
}