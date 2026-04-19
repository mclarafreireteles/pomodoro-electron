# Pomodoro Timer (React + Electron + TypeScript)
#### Objective
Develop a desktop Pomodoro timer application.

---

## Functional Requirements
### FR-01: Standard Pomodoro Cycle

The application must operate with three timer states:

- Focus (Pomodoro): 25 minutes
- Short Break: 5 minutes
- Long Break: 15 minutes

### FR-02: Automatic Cycle Logic

The application must follow the standard Pomodoro logic:

- After 1 "Focus" cycle, start a "Short Break"
- After 4 "Focus" cycles, start a "Long Break"

The application should automatically transition to the next cycle when the current one ends.

### FR-03: Timer Controls

The user must have clear controls to:

- Start: Begin the current cycle
- Pause/Resume: Pause the timer and resume from the current time
- Reset/Skip: Reset the current cycle or skip to the next one (e.g., skip a break)

### FR-04: Notifications

The application must notify the user when a cycle ends:

- Desktop Notification (Electron): Send a native OS notification (e.g., "Break time!" or "Time to focus!")
- Sound Alert: Play a subtle and modern notification sound

### FR-05: User Settings

There must be a simple settings area where the user can:

- Adjust the duration (in minutes) of Focus, Short Break, and Long Break timers
- Enable/disable sound alerts
- Enable/disable desktop notifications
- Configure the number of "Focus" cycles before a "Long Break"

### FR-06: Cycle Indicator
The interface must visually display how many "Focus" cycles have been completed in the current session

### FR-07: Settings Persistence

User-defined settings must be saved locally and loaded when the application restarts.

## Non-Functional Requirements
### NFR-01: Design & UI

The interface must be minimalistic. The design should be the main focus: clean, modern, with good typography and spacing.

### NFR-02: Timer Visualization

The timer (MM:SS) must be the central and most prominent element on the screen.

### NFR-03: Technology

The application must be built using Electron as the desktop wrapper and React for UI rendering.

### NFR-04: OS Integration (Electron)
System Tray Icon: The application must have a system tray icon
Minimize to Tray: Closing the main window should minimize the app to the tray instead of exiting (the timer must continue running)
Context Menu: Right-clicking the tray icon should display a simple menu (e.g., "Show App", "Pause Timer", "Quit")
### NFR-05: Performance

The application must be lightweight and have low CPU and memory usage, especially when minimized or running in the background.

### NFR-06: Application Window
The window may have a fixed size (non-resizable) to preserve design consistency
Remove the default Electron menu (File, Edit, View, etc.)
Include an "Always on Top" option
### NFR-07: Platform

The application must be buildable for Windows, macOS, and Linux.