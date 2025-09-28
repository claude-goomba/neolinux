// NeoLinux Desktop Environment - Cyberpunk Cursor Module

// Cyberpunk Cursor functionality
const cyberpunkCursor = document.getElementById('cyberpunk-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorTrails = [];

function updateCursor() {
    cyberpunkCursor.style.left = mouseX - 10 + 'px';
    cyberpunkCursor.style.top = mouseY - 10 + 'px';
}

function createCursorTrail() {
    if (Math.random() > 0.7) { // Only create trails 30% of the time for performance
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = mouseX - 2 + 'px';
        trail.style.top = mouseY - 2 + 'px';
        document.body.appendChild(trail);

        // Remove trail after animation
        setTimeout(() => {
            trail.remove();
        }, 800);
    }
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateCursor();
    createCursorTrail();
});

document.addEventListener('mousedown', () => {
    cyberpunkCursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cyberpunkCursor.classList.remove('clicking');
});

// Add hover effects for interactive elements
function initCursorHoverEffects() {
    const interactiveElements = document.querySelectorAll('.dock-item, .desktop-icon, .activities-button, .tray-icon, .window-control, .context-menu-item, .app-launcher, .workspace-preview, button, input, select, textarea');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cyberpunkCursor.classList.add('hovering');
        });

        element.addEventListener('mouseleave', () => {
            cyberpunkCursor.classList.remove('hovering');
        });
    });
}