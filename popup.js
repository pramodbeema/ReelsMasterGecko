document.addEventListener('DOMContentLoaded', () => {
    const seekInput = document.getElementById('seek-duration');
    const seekDisplay = document.getElementById('seek-duration-val');
    const quickBtns = document.querySelectorAll('.seek-chip');
    const autoScrollToggle = document.getElementById('auto-scroll-toggle');

    // ── SEEK DURATION ──────────────────────────────────────────────────
    function updateValue(val) {
        let num = parseInt(val, 10);
        if (isNaN(num) || num < 1) num = 5;
        if (num > 60) num = 60;

        seekInput.value = num;
        if (seekDisplay) seekDisplay.textContent = num + 's';

        quickBtns.forEach(btn => {
            if (parseInt(btn.getAttribute('data-val'), 10) === num) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set({ seekDuration: num });
        } else {
            localStorage.setItem('reels_master_seek', num);
        }
    }

    // Load initial settings
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get({ seekDuration: 5, autoScroll: false }, (res) => {
            if (res) {
                updateValue(res.seekDuration || 5);
                if (autoScrollToggle) autoScrollToggle.checked = Boolean(res.autoScroll);
            }
        });
    } else {
        const storedSeek = localStorage.getItem('reels_master_seek') || 5;
        updateValue(storedSeek);
        if (autoScrollToggle) {
            autoScrollToggle.checked = localStorage.getItem('reels_master_auto_scroll') === 'true';
        }
    }

    seekInput.addEventListener('input', (e) => {
        updateValue(e.target.value);
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-val');
            updateValue(val);
        });
    });

    // ── AUTO-SCROLL TOGGLE ─────────────────────────────────────────────
    if (autoScrollToggle) {
        autoScrollToggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
                chrome.storage.local.set({ autoScroll: isChecked });
            } else {
                localStorage.setItem('reels_master_auto_scroll', isChecked);
            }
        });
    }
});
