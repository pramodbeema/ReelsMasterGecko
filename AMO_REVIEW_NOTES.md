# Reviewer Instructions for Reels Master (v2.1.0) - Mozilla Add-ons (AMO)

## 📋 Quick Copy Notes for AMO Submission Form (Character Limit Friendly)

### Option 1: Ultra-Short (< 250 chars)
```text
Desktop-only extension for YouTube Shorts, Instagram Reels & Facebook Reels.
Test on Shorts/Reels:
• Space/K: Play/Pause (no scroll)
• Click "Auto scroll" to auto-advance
• > / <: Speed (0.25x-2x)
• ← / →: Seek
• Hover/drag: Instagram scrubber bar
```

### Option 2: Short (< 500 chars) — ⭐ Recommended
```text
Desktop-only extension (requires hardware keyboard & mouse). Not for Android.
Test on YouTube Shorts, Instagram Reels, or Facebook Reels:
• Space / K: Play/pause video without page scroll
• Auto-Scroll: Click on-screen "Auto scroll" button to auto-advance on video end
• Instagram Scrubber: Hover mouse over Reel to reveal bottom timeline bar; click/drag to seek
• Speed: Press > / < (Shift + . / ,) for 0.25x - 2x speed
• Seek: Press ← / → (duration in popup)
• Ctrl+Shift+F: Convert to standard video
```

### Option 3: Medium (< 1000 chars)
```text
Desktop-only extension designed for hardware keyboard & mouse navigation (not for mobile/Android).

Test on YouTube Shorts (youtube.com/shorts/), Instagram Reels (instagram.com/reels/), or Facebook Reels (facebook.com/reel/):
1. Space / K: Play/pause video without browser page scroll.
2. Auto-Scroll: Click the on-screen "Auto scroll" button (left of Reels, or sidebar on Shorts) to auto-advance when video ends.
3. Instagram Scrubber: Hover mouse over any Instagram Reel to see the bottom progress scrubber bar; click/drag to seek with time preview.
4. Speed: Press > / < (or Shift + . / ,) to change playback speed (0.25x - 2.0x).
5. Seek: Press ← / → to seek backward/forward (customize duration in popup).
6. Volume/Mute: Press M to mute/unmute; Shift + ↑/↓ for volume.
7. Convert: Press Ctrl+Shift+F (or click Convert button).

Zero remote code, 100% offline, zero data collection (data_collection_permissions: none).
```

---

## Target Platform & Compatibility
- **Desktop Only (Windows, macOS, Linux)**: Reels Master is specifically architected for desktop browsing environments relying on physical hardware keyboard shortcuts (Space/K, arrow navigation, volume modifiers) and mouse interactions (timeline scrubber on hover and drag). It is intentionally **not designed for or targeting mobile devices / Firefox for Android**, where touch gestures replace keyboard shortcuts.

## How to Test in Firefox (Desktop)
1. Open Firefox on your desktop and go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...** and select `manifest.json` from the root of this extension directory.
3. Test on any or all 3 supported platforms using your keyboard and mouse:
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
