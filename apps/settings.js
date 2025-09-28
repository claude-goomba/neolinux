// NeoLinux Desktop Environment - Settings App Module

// Settings functionality
function initSettings(windowDiv) {
    const sidebarItems = windowDiv.querySelectorAll('div[style*="padding: 10px; cursor: pointer"]');
    const contentArea = windowDiv.querySelector('div[style*="flex: 1; padding: 30px"]');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active state from all items
            sidebarItems.forEach(i => {
                i.style.background = '';
            });
            // Set active state
            item.style.background = 'rgba(0, 255, 136, 0.2)';

            const category = item.textContent.trim();
            loadSettingsCategory(contentArea, category);
            showNotification('Settings', `Opened ${category} settings`);
        });
    });

    // Initialize controls in current view
    initDisplaySettings(windowDiv);
}

function loadSettingsCategory(contentArea, category) {
    const settingsContent = {
        '🖥️ Display': `
            <h2 style="color: #00ff88; margin-bottom: 20px;">Display Settings</h2>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px;">Resolution</label>
                <select id="resolution-select" style="padding: 8px; background: rgba(20, 20, 35, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; width: 200px;">
                    <option>1920 x 1080</option>
                    <option>1600 x 900</option>
                    <option>1366 x 768</option>
                </select>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px;">Scale: <span id="scale-value">100%</span></label>
                <input type="range" id="scale-slider" min="100" max="200" value="100" style="width: 200px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px;">Night Light</label>
                <label style="display: flex; align-items: center; cursor: pointer;">
                    <input type="checkbox" id="night-light" style="margin-right: 8px;">
                    <span>Enable Night Light</span>
                </label>
            </div>
        `,
        '🔊 Sound': `
            <h2 style="color: #00ff88; margin-bottom: 20px;">Sound Settings</h2>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px;">Master Volume: <span id="volume-value">50%</span></label>
                <input type="range" id="volume-slider" min="0" max="100" value="50" style="width: 200px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px;">Output Device</label>
                <select style="padding: 8px; background: rgba(20, 20, 35, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; width: 200px;">
                    <option>Built-in Audio</option>
                    <option>HDMI Audio</option>
                    <option>USB Headphones</option>
                </select>
            </div>
        `
    };

    contentArea.innerHTML = settingsContent[category] || settingsContent['🖥️ Display'];

    // Re-initialize controls
    setTimeout(() => {
        initDisplaySettings(contentArea.closest('.window'));
    }, 100);
}

function initDisplaySettings(windowDiv) {
    const scaleSlider = windowDiv.querySelector('#scale-slider');
    const scaleValue = windowDiv.querySelector('#scale-value');
    const volumeSlider = windowDiv.querySelector('#volume-slider');
    const volumeValue = windowDiv.querySelector('#volume-value');
    const nightLight = windowDiv.querySelector('#night-light');
    const resolutionSelect = windowDiv.querySelector('#resolution-select');

    if (scaleSlider && scaleValue) {
        scaleSlider.addEventListener('input', () => {
            scaleValue.textContent = scaleSlider.value + '%';
            showNotification('Display', `Scale set to ${scaleSlider.value}%`);
        });
    }

    if (volumeSlider && volumeValue) {
        volumeSlider.addEventListener('input', () => {
            volumeValue.textContent = volumeSlider.value + '%';
            showNotification('Sound', `Volume set to ${volumeSlider.value}%`);
        });
    }

    if (nightLight) {
        nightLight.addEventListener('change', () => {
            showNotification('Display', `Night Light ${nightLight.checked ? 'enabled' : 'disabled'}`);
        });
    }

    if (resolutionSelect) {
        resolutionSelect.addEventListener('change', () => {
            showNotification('Display', `Resolution changed to ${resolutionSelect.value}`);
        });
    }
}