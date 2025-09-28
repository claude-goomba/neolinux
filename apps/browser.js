// NeoLinux Desktop Environment - Browser App Module

// Browser functionality
function initBrowser(windowDiv) {
    const urlInput = windowDiv.querySelector('input[placeholder*="URL"]');
    const goButton = windowDiv.querySelector('button:last-child');
    const backButton = windowDiv.querySelector('button:first-child');
    const forwardButton = windowDiv.querySelector('button:nth-child(2)');
    const contentArea = windowDiv.querySelector('div[style*="flex: 1"]');

    let browserHistory = ['chrome://newtab'];
    let historyIndex = 0;

    function loadPage(url) {
        if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('chrome://')) {
            if (url.includes('.')) {
                url = 'https://' + url;
            } else {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
            }
        }

        browserHistory = browserHistory.slice(0, historyIndex + 1);
        browserHistory.push(url);
        historyIndex = browserHistory.length - 1;

        urlInput.value = url;

        // Simulate page loading
        contentArea.innerHTML = `
            <h2 style="color: #00ff88; margin-bottom: 20px;">NeoLinux Browser</h2>
            <div style="margin: 20px 0;">
                <div style="color: #00ff88;">✓ Connected to: ${url}</div>
                <div style="margin-top: 10px; color: #888;">Simulated web content for: ${url}</div>
            </div>
            <div style="margin-top: 30px; padding: 20px; background: rgba(0, 255, 136, 0.1); border-radius: 8px;">
                <h3>Page Content</h3>
                <p>This is a simulated webpage. In a real browser, you would see the actual content from ${url}</p>
                <button onclick="showNotification('Browser', 'Link clicked!')" style="margin-top: 10px; padding: 8px 16px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer;">Sample Link</button>
            </div>
        `;

        showNotification('Browser', `Navigated to ${url}`);
    }

    goButton.addEventListener('click', () => {
        loadPage(urlInput.value || 'chrome://newtab');
    });

    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loadPage(urlInput.value || 'chrome://newtab');
        }
    });

    backButton.addEventListener('click', () => {
        if (historyIndex > 0) {
            historyIndex--;
            loadPage(browserHistory[historyIndex]);
        }
    });

    forwardButton.addEventListener('click', () => {
        if (historyIndex < browserHistory.length - 1) {
            historyIndex++;
            loadPage(browserHistory[historyIndex]);
        }
    });
}