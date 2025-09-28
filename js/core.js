// NeoLinux Desktop Environment - Core Functions

// Window management
let windows = [];
let activeWindow = null;
let windowZIndex = 100;
let isDragging = false;
let currentWindow = null;
let dragOffset = { x: 0, y: 0 };

// Terminal history
let terminalHistory = [];
let historyIndex = -1;

// Clock update
function updateClock() {
    const now = new Date();
    const time = now.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('panel-clock').textContent = time;
}

// Initialize matrix background
function createMatrixEffect() {
    const matrixBg = document.getElementById('matrix-bg');
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDuration = (Math.random() * 10 + 5) + 's';
        column.textContent = Array(50).fill(0).map(() =>
            String.fromCharCode(Math.random() > 0.5 ?
                Math.floor(Math.random() * 26) + 97 :
                Math.floor(Math.random() * 10) + 48)
        ).join('');
        matrixBg.appendChild(column);
    }
}

// Window creation
function createWindow(appName) {
    const app = window.apps[appName];
    if (!app) return;

    const existingWindow = windows.find(w => w.app === appName);
    if (existingWindow) {
        focusWindow(existingWindow.element);
        return;
    }

    const windowDiv = document.createElement('div');
    windowDiv.className = 'window active';
    windowDiv.style.left = (100 + windows.length * 30) + 'px';
    windowDiv.style.top = (50 + windows.length * 30) + 'px';
    windowDiv.style.width = '700px';
    windowDiv.style.height = '500px';
    windowDiv.style.zIndex = ++windowZIndex;

    windowDiv.innerHTML = `
        <div class="window-header">
            <div class="window-controls">
                <button class="window-control window-close"></button>
                <button class="window-control window-minimize"></button>
                <button class="window-control window-maximize"></button>
            </div>
            <div class="window-title">${app.title}</div>
        </div>
        <div class="window-content">
            ${app.content}
        </div>
    `;

    document.getElementById('desktop').appendChild(windowDiv);

    const windowObj = {
        element: windowDiv,
        app: appName,
        title: app.title,
        minimized: false
    };
    windows.push(windowObj);

    // Set up window controls
    const header = windowDiv.querySelector('.window-header');
    header.addEventListener('mousedown', startDragging);

    windowDiv.querySelector('.window-close').addEventListener('click', () => {
        closeWindow(windowDiv, appName);
    });

    windowDiv.querySelector('.window-minimize').addEventListener('click', () => {
        minimizeWindow(windowDiv);
    });

    windowDiv.querySelector('.window-maximize').addEventListener('click', () => {
        maximizeWindow(windowDiv);
    });

    windowDiv.addEventListener('mousedown', () => {
        focusWindow(windowDiv);
    });

    // Update dock
    const dockItem = document.querySelector(`.dock-item[data-app="${appName}"]`);
    if (dockItem) {
        dockItem.classList.add('running');
    }

    focusWindow(windowDiv);

    // Special handling for different apps
    setTimeout(() => {
        if (appName === 'terminal') {
            const terminalInput = document.getElementById('terminal-input-field');
            if (terminalInput) {
                terminalInput.focus();
                terminalInput.addEventListener('keydown', handleTerminalInput);
            }
        } else if (appName === 'homeassistant') {
            initHomeAssistant(windowDiv);
        } else if (appName === 'files') {
            initFilesApp(windowDiv);
        } else if (appName === 'browser') {
            initBrowser(windowDiv);
        } else if (appName === 'editor') {
            initTextEditor(windowDiv);
        } else if (appName === 'system') {
            initSystemMonitor(windowDiv);
        } else if (appName === 'settings') {
            initSettings(windowDiv);
        }
    }, 100);

    // Show notification
    showNotification(`${app.title} Started`, `Application ${app.title} has been opened`);
}

function closeWindow(windowElement, appName) {
    windowElement.remove();
    windows = windows.filter(w => w.app !== appName);

    const dockItem = document.querySelector(`.dock-item[data-app="${appName}"]`);
    if (dockItem) {
        dockItem.classList.remove('running');
    }
}

function minimizeWindow(windowElement) {
    windowElement.style.display = 'none';
    const windowObj = windows.find(w => w.element === windowElement);
    if (windowObj) windowObj.minimized = true;
}

function maximizeWindow(windowElement) {
    if (windowElement.dataset.maximized === 'true') {
        windowElement.style.width = '700px';
        windowElement.style.height = '500px';
        windowElement.style.left = '100px';
        windowElement.style.top = '50px';
        windowElement.dataset.maximized = 'false';
    } else {
        windowElement.style.width = 'calc(100% - 20px)';
        windowElement.style.height = 'calc(100% - 52px)';
        windowElement.style.left = '10px';
        windowElement.style.top = '10px';
        windowElement.dataset.maximized = 'true';
    }
}

function focusWindow(windowElement) {
    document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('active');
    });
    windowElement.classList.add('active');
    windowElement.style.zIndex = ++windowZIndex;
    activeWindow = windowElement;
}

function startDragging(e) {
    if (e.target.classList.contains('window-control')) return;
    isDragging = true;
    currentWindow = e.target.closest('.window');
    dragOffset.x = e.clientX - currentWindow.offsetLeft;
    dragOffset.y = e.clientY - currentWindow.offsetTop;
}

// Notification system
function showNotification(title, body) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-body">${body}</div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Event listeners for window management
document.addEventListener('mousemove', (e) => {
    if (isDragging && currentWindow) {
        currentWindow.style.left = (e.clientX - dragOffset.x) + 'px';
        currentWindow.style.top = (e.clientY - dragOffset.y) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    currentWindow = null;
});