// NeoLinux Desktop Environment - System Monitor App Module

// System Monitor functionality
function initSystemMonitor(windowDiv) {
    let cpuUsage = 35;
    let memoryUsage = 62;
    let networkDown = 2.5;
    let networkUp = 0.8;

    function updateSystemStats() {
        // Simulate changing system stats
        cpuUsage = Math.max(10, Math.min(90, cpuUsage + (Math.random() - 0.5) * 10));
        memoryUsage = Math.max(30, Math.min(85, memoryUsage + (Math.random() - 0.5) * 5));
        networkDown = Math.max(0.1, Math.min(10, networkDown + (Math.random() - 0.5) * 2));
        networkUp = Math.max(0.1, Math.min(5, networkUp + (Math.random() - 0.5) * 1));

        // Update CPU bar
        const cpuBar = windowDiv.querySelector('div[style*="width: 35%"]');
        if (cpuBar) {
            cpuBar.style.width = cpuUsage + '%';
            cpuBar.parentElement.nextElementSibling.textContent = `${Math.round(cpuUsage)}% - 4 cores`;
        }

        // Update Memory bar
        const memoryBar = windowDiv.querySelector('div[style*="width: 62%"]');
        if (memoryBar) {
            memoryBar.style.width = memoryUsage + '%';
            const memoryGB = (memoryUsage / 100 * 8).toFixed(1);
            memoryBar.parentElement.nextElementSibling.textContent = `${memoryGB} GB / 8.0 GB`;
        }

        // Update Network
        const networkElements = windowDiv.querySelectorAll('p[style*="font-size: 14px"]');
        networkElements.forEach(p => {
            if (p.textContent.includes('↓')) {
                p.textContent = `↓ ${networkDown.toFixed(1)} MB/s`;
            } else if (p.textContent.includes('↑')) {
                p.textContent = `↑ ${networkUp.toFixed(1)} MB/s`;
            }
        });
    }

    // Update every 2 seconds
    const interval = setInterval(updateSystemStats, 2000);

    // Clean up interval when window is closed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.removedNodes.forEach((node) => {
                    if (node === windowDiv) {
                        clearInterval(interval);
                    }
                });
            }
        });
    });

    observer.observe(document.getElementById('desktop'), { childList: true });
}