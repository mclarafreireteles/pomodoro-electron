import './App.css'
import { usePomodoro } from './hooks/usePomodoro';
import { Time } from './components/Time/time'
import { ModeToggle } from './components/ModeToggle';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

import { IconButton } from '@mui/material';

function App() {
  const { time, isActive, mode, start, pause, changeMode, reset  } = usePomodoro();

  return (
    <main className='pomodoro-container'>
      <div className="pomodoro-header">
        <ModeToggle mode={mode} changeMode={changeMode} />
        {/* <ThemeToggle/> */}
      </div>
      <Time time={time}/>
      {!isActive ? (
          <IconButton onClick={start} size='large'>
            <PlayArrowIcon fontSize='large' />
          </IconButton>
        ) : (
          <div className="pomodoro-container-buttons">
            <IconButton onClick={pause} size='large'>
              <PauseIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={reset} size='large'>
              <StopIcon fontSize='large' />
            </IconButton>
          </div>
        )}
    </main>
  )
}

export default App
