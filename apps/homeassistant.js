// NeoLinux Desktop Environment - Home Assistant App Module

// Home Assistant functionality
function initHomeAssistant(windowDiv) {
    const homeAssistantState = {
        lights: { livingroom: true, kitchen: false, bedroom: true },
        temperature: { current: 22, target: 24 },
        security: { frontdoor: 'LOCKED', garage: 'CLOSED', alarm: 'ARMED' },
        energy: { current: 2.4, today: 18.5, cost: 2.14 },
        devices: { tv: true, vacuum: false, speaker: true, doorbell: true }
    };

    // Light toggles
    windowDiv.querySelectorAll('input[type="checkbox"]').forEach((checkbox, index) => {
        const rooms = ['livingroom', 'kitchen', 'bedroom'];
        const room = rooms[index];
        if (room && homeAssistantState.lights[room] !== undefined) {
            checkbox.checked = homeAssistantState.lights[room];
            checkbox.addEventListener('change', () => {
                homeAssistantState.lights[room] = checkbox.checked;
                const slider = checkbox.nextElementSibling;
                slider.style.background = checkbox.checked ? '#00ff88' : '#555';
                showNotification('Smart Light', `${room.charAt(0).toUpperCase() + room.slice(1)} light ${checkbox.checked ? 'turned on' : 'turned off'}`);
            });
        }
    });

    // Temperature controls
    const tempButtons = windowDiv.querySelectorAll('button');
    tempButtons.forEach(button => {
        if (button.textContent === '-') {
            button.addEventListener('click', () => {
                homeAssistantState.temperature.target = Math.max(15, homeAssistantState.temperature.target - 1);
                updateTemperatureDisplay(windowDiv, homeAssistantState.temperature.target);
                showNotification('Climate Control', `Target temperature set to ${homeAssistantState.temperature.target}°C`);
            });
        } else if (button.textContent === '+') {
            button.addEventListener('click', () => {
                homeAssistantState.temperature.target = Math.min(30, homeAssistantState.temperature.target + 1);
                updateTemperatureDisplay(windowDiv, homeAssistantState.temperature.target);
                showNotification('Climate Control', `Target temperature set to ${homeAssistantState.temperature.target}°C`);
            });
        }
    });

    // Media controls
    const mediaButtons = windowDiv.querySelectorAll('button');
    mediaButtons.forEach(button => {
        if (button.textContent === '⏸️') {
            button.addEventListener('click', () => {
                button.textContent = '▶️';
                showNotification('Media Player', 'Music paused');
            });
        } else if (button.textContent === '▶️') {
            button.addEventListener('click', () => {
                button.textContent = '⏸️';
                showNotification('Media Player', 'Music resumed');
            });
        }
    });
}

function updateTemperatureDisplay(windowDiv, temp) {
    const tempDisplay = windowDiv.querySelector('div[style*="font-size: 32px"]');
    if (tempDisplay) {
        tempDisplay.textContent = temp + '°C';
    }
    const targetDisplay = windowDiv.querySelector('span[style*="color: #00ff88"]:not([style*="background"])');
    if (targetDisplay) {
        targetDisplay.textContent = temp + '°C';
    }
}