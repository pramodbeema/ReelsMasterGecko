// Reels Master for Firefox (Gecko) - Background Event Script
// Created by: Pramod Beema (https://github.com/pramodbeema/ReelsMasterGecko)

// Open welcome onboarding page on install or update
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update') {
    chrome.tabs.create({ url: chrome.runtime.getURL('welcome.html') });
  }
});

// Listen for universal convert shortcut (Ctrl+Shift+F / Command+Shift+F)
chrome.commands.onCommand.addListener((command) => {
  if (command === 'convert-video' || command === 'convert-short') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs && tabs[0];
      if (!activeTab || !activeTab.url) return;
      const url = activeTab.url;

      // 1. YouTube Shorts -> Regular Video
      if (url.includes('youtube.com') && url.includes('/shorts/')) {
        const videoId = url.split('/shorts/')[1].split(/[?&]/)[0];
        const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
        chrome.tabs.update(activeTab.id, { url: newUrl });
        return;
      }

      // 2. Instagram Reels -> Classic Post
      if (url.includes('instagram.com')) {
        const reelMatch = url.match(/\/reel(?:s)?\/([a-zA-Z0-9_-]+)/);
        if (reelMatch && reelMatch[1]) {
          const newUrl = `https://www.instagram.com/p/${reelMatch[1]}/`;
          chrome.tabs.update(activeTab.id, { url: newUrl });
          return;
        }
      }

      // 3. Facebook Reels -> Standard Watch Video
      if (url.includes('facebook.com')) {
        const fbMatch = url.match(/\/reel\/([0-9a-zA-Z_-]+)/);
        if (fbMatch && fbMatch[1]) {
          const newUrl = `https://www.facebook.com/watch/?v=${fbMatch[1]}`;
          chrome.tabs.update(activeTab.id, { url: newUrl });
          return;
        }
      }
    });
  }
});
