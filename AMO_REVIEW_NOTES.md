# Reviewer Instructions for Reels Master (v2.1.0) - Mozilla Add-ons (AMO)

## How to Test in Firefox
1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...** and select `manifest.json` from the root of this extension directory.
3. Test on any or all 3 supported platforms:
   - **YouTube Shorts**: `https://www.youtube.com/shorts/`
   - **Instagram Reels**: `https://www.instagram.com/reels/`
   - **Facebook Reels**: `https://www.facebook.com/reel/`

## Feature Test Checklist
- **Play/Pause**: Press `Space` (or `K`) to pause and play without browser page scrolling.
- **Auto-Scroll**: Click the "Auto scroll" button (positioned on the left of active Reels on Instagram & Facebook, and in the action sidebar for YouTube Shorts). When the video reaches its end, it automatically advances to the next video.
- **Instagram Timeline Scrubber**: Hover the mouse over any Instagram Reel to see the bottom progress scrubber bar; click or drag to seek anywhere along the timeline with time preview.
- **Playback Speed**: Press `>` / `<` (or `Shift + .` / `,`) to change playback speed from 0.25x to 2.0x with on-screen HUD.
- **Seek Backward/Forward**: Press `←` / `→` to seek backward or forward. The seek duration (2s, 5s, 10s, 15s) can be changed in the popup.
- **Restart**: Press `0` to immediately jump back to `0:00`.
- **Mute / Volume**: Press `M` to mute/unmute. Press `Shift + ↑` / `↓` to adjust volume in 10% steps.
- **Audio Tracks (YouTube Shorts)**: Press `A` to open audio-track options; navigate with `↑` / `↓` and `Enter`.
- **Captions**: Press `C` to toggle captions.
- **Convert to Standard Video**: Press `Ctrl+Shift+F` (or `Cmd+Shift+F` on macOS) or click the on-screen "Convert" button.

## Permissions Justification
- `activeTab`: Used to query and update the active tab URL when the user triggers the "Convert" shortcut command.
- `storage`: Used solely to save user preferences locally (such as seek duration and auto-scroll toggle state).
- Host permissions (`youtube.com`, `instagram.com`, `facebook.com`): Required to inject content scripts and CSS to provide playback controls, on-screen buttons, and the Instagram timeline scrubber on these specific video domains.

## Security & Privacy Compliance
- `data_collection_permissions`: Configured to `{"required": ["none"]}` in `manifest.json`.
- Zero external dependencies.
- Zero remote code execution (no `eval`, no remote CDNs or scripts).
- Zero user data collection, tracking, or telemetry.
- All code is human-readable and unminified.
