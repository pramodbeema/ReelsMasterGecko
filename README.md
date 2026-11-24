# Reels Master for Firefox (Gecko) - v2.1.0

[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--ons-FF7139?logo=firefox-browser&logoColor=white)](https://addons.mozilla.org/en-US/firefox/extensions/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-ReelsMasterGecko-blue?logo=github)](https://github.com/pramodbeema/ReelsMasterGecko)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-success.svg)](manifest.json)

> **Desktop superpowers for YouTube Shorts, Instagram Reels & Facebook Reels on Mozilla Firefox.**

> 🖥️ **Desktop Exclusive**: Reels Master is specifically tailored for desktop browser environments (Windows, macOS, Linux) utilizing physical keyboard shortcuts and mouse hover navigation. Because mobile touchscreens lack physical hardware keyboards and rely on swipe gestures, this extension is intentionally designed solely for Desktop Firefox and not for mobile devices or Firefox for Android.

Control video playback across YouTube Shorts, Instagram Reels, and Facebook Reels with essential desktop superpowers: spacebar play/pause without page scroll, hands-free auto-scrolling, an interactive Instagram timeline scrubber, playback speed controls, customizable seeking, volume controls, captions, and one-click standard video conversion.

Created by **[Pramod Beema](https://github.com/pramodbeema)**

---

## 📥 Installation in Mozilla Firefox

### Option 1: Official Firefox Add-ons (AMO)
Install directly from [Mozilla Add-ons (AMO)](https://addons.mozilla.org/en-US/firefox/extensions/). *(Search for "Reels Master")*

### Option 2: Temporary Add-on (For Developers & Testing)
1. Clone or download this repository:
   ```bash
   git clone https://github.com/pramodbeema/ReelsMasterGecko.git
   ```
2. Open Mozilla Firefox and navigate to `about:debugging#/runtime/this-firefox` in the URL bar.
3. Click the **Load Temporary Add-on...** button.
4. Browse to the `ReelsMasterGecko` directory and select `manifest.json`.
5. Done! 🎉 Reels Master is now active on YouTube, Instagram, and Facebook.

---

## 🎯 Key Features

### 1. ⏯️ Space Bar Play/Pause (All 3 Platforms)
Press **Space** (or **K**) to pause and play YouTube Shorts, Instagram Reels, and Facebook Reels just like standard desktop video players. Safely suppresses unwanted browser page scrolling and blocks accidental button clicks.

### 2. 🔁 Hands-Free Auto-Scroll (All 3 Platforms)
- **Instagram & Facebook**: A clean on-screen **Auto scroll** button is positioned on the **left side of the active Reel**. When the current Reel finishes, it automatically advances to the next Reel without requiring any mouse clicks.
- **YouTube Shorts**: Auto scroll button integrated natively into the action sidebar above Convert.
- Includes smart video loop detection for Meta's repeating video playback engine.

### 3. ⏱️ Interactive Instagram Timeline Scrubber (Bottom Line)
Hover your mouse over any Instagram Reel to reveal an interactive single-line seek bar right at the bottom edge of the player. Features a live played gradient fill, draggable white circle handle, and floating time preview (`0:14 / 0:48`). Click or drag anywhere along the line to scrub smoothly with your mouse — especially useful when viewing Reels while logged out!

### 4. ⚡ Playback Speed Controls (All 3 Platforms)
Adjust playback speed using **>** (speed up) and **<** (slow down) (or `Shift + .` / `,`) from 0.25x up to 2.0x with centered on-screen HUD speed feedback.

### 5. ⏩ Customizable Seeker (All 3 Platforms)
Use **arrow keys** (← →) to seek with visual feedback. Set your desired seek duration in seconds directly in the extension popup (slider from 1s to 30s, or 2s, 5s, 10s, 15s quick chips).

### 6. ⏮️ Restart from Beginning (All 3 Platforms)
Press **0** to restart the current video from the beginning (`0:00`).

### 7. 🔇 Volume & Mute Controls (All 3 Platforms)
Press **M** to quickly toggle audio mute/unmute, and use **Shift + ↑ / ↓** to adjust volume smoothly with on-screen percentage feedback.

### 8. 🎧 Audio Track Navigator (YouTube)
Press **A** to open the audio track selection menu with full keyboard navigation (↑/↓ + Enter, number keys 1–9, or press 'a' again to cycle).

### 9. 💬 Caption Toggle (YouTube & Reels)
Press **C** to toggle closed captions and subtitles.

### 10. 🔄 Video Converter (YouTube Shorts & Reels)
Convert YouTube Shorts or Reels to regular video format with the on-screen Convert button or the **Ctrl+Shift+F** (Mac: **Cmd+Shift+F**) keyboard shortcut.

---

## ⌨️ Universal Keyboard Shortcuts Reference

| Shortcut | Action | Supported Platforms |
| :--- | :--- | :--- |
| **Space** / **K** | Play / Pause video (no page scroll) | YouTube, Instagram, Facebook |
| **&gt;** / **&lt;** (`Shift + . / ,`) | Speed Up / Slow Down playback (0.25x – 2.0x) | YouTube, Instagram, Facebook |
| **← →** | Seek video (custom seconds from popup) | YouTube, Instagram, Facebook |
| **Mouse Hover & Drag** | Interactive timeline scrubber bar | Instagram Reels |
| **0** | Restart video from beginning (`0:00`) | YouTube, Instagram, Facebook |
| **M** | Mute / Unmute active audio | YouTube, Instagram, Facebook |
| **Shift + ↑ ↓** | Increase / Decrease volume (10% steps) | YouTube, Instagram, Facebook |
| **C** | Toggle Captions / Subtitles | YouTube, Instagram, Facebook |
| **A** | Open audio track menu / cycle tracks | YouTube Shorts |
| **Ctrl+Shift+F** | Convert to standard video format | YouTube, Instagram, Facebook |

---

## 🔧 Technical Details & Gecko Compliance

- **Manifest Version**: 3 (Gecko MV3)
- **Gecko ID**: `reelsmaster@pramodbeema`
- **Minimum Firefox Version**: 142.0 (Full desktop & Android compatibility for AMO consent)
- **Data Collection Permissions**: `none` (100% offline, zero data collected)
- **Permissions**: `activeTab`, `storage`
- **Host Permissions**:
  - `https://www.youtube.com/*`
  - `*://*.instagram.com/*`
  - `*://*.facebook.com/*`
- **Zero Remote Code**: 100% compliant with Mozilla Add-ons (AMO) Content Security Policy and privacy policies. No external scripts, telemetry, or analytics.

---

## 👤 Author & Repository

- **Author**: Pramod Beema
- **GitHub Repository**: [https://github.com/pramodbeema/ReelsMasterGecko](https://github.com/pramodbeema/ReelsMasterGecko)
- **Feedback & Issues**: [https://github.com/pramodbeema/ReelsMasterGecko/issues](https://github.com/pramodbeema/ReelsMasterGecko/issues)
- **License**: MIT
