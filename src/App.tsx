import './App.css'
import { usePomodoro } from './hooks/usePomodoro';
import { Time } from './components/Time/time'
import { ModeToggle } from './components/ModeToggle';

function App() {

  const { time, isActive, mode, start, pause, changeMode  } = usePomodoro()

  return (
    <main className='pomodoro-container'>
      <div className="pomodoro-header">
        <ModeToggle mode={mode} changeMode={changeMode} />
        {/* <ThemeToggle/> */}
      </div>
      <Time time={time}/>
      {/* <ActionBar isActive={isActive}/>  */}
      {!isActive ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
    </main>
  )
}

export default App
