import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PomodoroMode } from '../../hooks/usePomodoro';

interface ModeToggleProps {
    mode: PomodoroMode;
    changeMode: (newMode: PomodoroMode) => void;
}

export function ModeToggle({ mode, changeMode }: ModeToggleProps) {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newMode: PomodoroMode,
    ) => {
        if (newMode !== null) {
            changeMode(newMode);
        }
    };

    return (
        <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleChange}
            aria-label="Pomodoro Mode"
            sx={{
                '& .MuiToggleButton-root': {
                    fontFamily: 'Inter',
                    color: 'var(--black-200)',
                    backgroundColor: 'var(--white-200)',
                    textTransform: 'none',
                    '&:first-of-type': {
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                    },
                    '&.Mui-selected': {
                        color: 'var(--black-200)',
                        backgroundColor: 'var(--white-100)',
                        fontWeight: 'bold',
                    },
                    '&:hover': {
                        backgroundColor: 'var(--white-100)',
                    },
                    '&.Mui-selected:hover': {
                        color: 'var(--black-200)',
                        backgroundColor: 'var(--white-100)',
                    }
                }
            }}
        >
            <ToggleButton value="focus" aria-label="Focus Mode">
                Focus
            </ToggleButton>
            <ToggleButton value="rest" aria-label="Rest Mode">
                Rest
            </ToggleButton>
        </ToggleButtonGroup>
    );
}