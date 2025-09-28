// NeoLinux Desktop Environment - Files App Module

// Files app functionality
function initFilesApp(windowDiv) {
    const fileItems = windowDiv.querySelectorAll('.file-item');
    const sidebarItems = windowDiv.querySelectorAll('.file-sidebar-item');

    fileItems.forEach(item => {
        item.addEventListener('dblclick', () => {
            const fileName = item.querySelector('.file-item-name').textContent;
            if (fileName.endsWith('.txt') || fileName.endsWith('.md')) {
                showNotification('Files', `Opening ${fileName} in Text Editor`);
                createWindow('editor');
            } else if (fileName.includes('folder') || !fileName.includes('.')) {
                showNotification('Files', `Entering folder: ${fileName}`);
                // Simulate folder navigation
                updateFileView(windowDiv, fileName);
            }
        });
    });

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const folderName = item.textContent.split(' ')[1] || item.textContent;
            showNotification('Files', `Navigating to ${folderName}`);
            updateFileView(windowDiv, folderName);
        });
    });
}

function updateFileView(windowDiv, folderName) {
    const fileGrid = windowDiv.querySelector('.file-grid');
    const header = windowDiv.querySelector('h3');

    header.textContent = `${folderName} Directory`;

    // Simulate different folder contents
    const folderContents = {
        'Documents': ['resume.pdf', 'projects', 'notes.txt'],
        'Downloads': ['firefox.tar.gz', 'image.png', 'video.mp4'],
        'Pictures': ['vacation.jpg', 'screenshot.png', 'wallpaper.jpg'],
        'Music': ['song1.mp3', 'album', 'playlist.m3u'],
        'Videos': ['movie.mp4', 'recording.avi', 'tutorial.webm']
    };

    const files = folderContents[folderName] || ['file1.txt', 'file2.pdf', 'subfolder'];

    fileGrid.innerHTML = files.map(file => `
        <div class="file-item">
            <div class="file-item-icon">${file.includes('.') ? '📄' : '📁'}</div>
            <div class="file-item-name">${file}</div>
        </div>
    `).join('');

    // Re-attach event listeners
    setTimeout(() => initFilesApp(windowDiv), 100);
}