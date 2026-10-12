# Vibefy — Interactive Web Music Player

**Vibefy** is a Spotify-inspired web music player built with HTML, CSS, and vanilla JavaScript. It features a modern music-streaming interface, a curated collection of 50 tracks, and an interactive playback system with shuffle, repeat, and real-time progress controls.

The project focuses on building an engaging user interface while implementing core audio playback functionality using JavaScript and the HTML5 Audio API.

## Live Demo

**Try Vibefy here:** [Launch Vibefy](https://vibefy-jahnvi.netlify.app)

## Features

- **Interactive Music Library:** Browse 50 music tracks displayed in image-based cards.
- **Audio Playback:** Play and pause songs using individual track controls or the main player.
- **Dynamic Now Playing Bar:** Update the current song's title, description, and artwork when a track is selected.
- **Playback Navigation:** Skip to the next song or return to the previous track.
- **Shuffle Mode:** Randomize the playback order using the Fisher–Yates shuffle algorithm.
- **Repeat Mode:** Replay the current track instead of automatically advancing to the next one.
- **Real-Time Progress Tracking:** Synchronize the progress bar with the current playback position.
- **Seek Controls:** Jump to a specific position in a song by interacting with the progress bar.
- **Automatic Track Advancement:** Move to the next track when the current song finishes, unless repeat mode is enabled.
- **Music-Streaming UI:** Spotify-inspired navigation, library sidebar, music cards, and a persistent bottom player.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic page layout |
| CSS3 | Styling, layout, and music-player interface |
| JavaScript (ES6+) | Playback logic, event handling, and dynamic UI updates |
| HTML5 Audio API | Audio playback, seeking, and playback events |
| Font Awesome | Playback controls and interface icons |
| Google Fonts | Montserrat typography |

## Project Structure

```text
Vibefy/
├── index.html          # Main application interface
├── style.css           # Styling and layout
├── script.js           # Music player logic
├── Audio/
│   ├── 1.mp3
│   ├── 2.mp3
│   └── ...             # Audio tracks
└── Images/
    ├── 1.jpg
    ├── 2.jpg
    └── ...             # Album artwork
```

## Key Learnings

Building Vibefy provided hands-on experience with:

- Manipulating the DOM and updating elements dynamically.
- Working with JavaScript arrays, objects, and array-copying techniques.
- Implementing event-driven programming and managing application state.
- Integrating audio playback through the HTML5 Audio API.
- Implementing the Fisher–Yates shuffle algorithm.
- Synchronizing UI components with media playback events.
- Structuring a multi-file frontend project with local assets.

## Future Enhancements

Potential improvements to extend the project include:

- Responsive layouts optimized for mobile devices and tablets.
- Functional search and filtering for tracks.
- User-created playlists and persistent library management.
- Volume controls and keyboard shortcuts.
- Improved accessibility, including keyboard navigation and descriptive labels.
- Persistent playback preferences using browser storage.
- A backend for user accounts, playlists, and music metadata.
- Deployment to a public hosting platform.

---

*Built as a hands-on project to strengthen frontend development skills and explore interactive audio applications using vanilla JavaScript.*

