// NeoLinux Desktop Environment - Text Editor App Module

// Text Editor functionality
function initTextEditor(windowDiv) {
    const textarea = windowDiv.querySelector('textarea');
    const newButton = windowDiv.querySelector('button');
    const openButton = windowDiv.querySelectorAll('button')[1];
    const saveButton = windowDiv.querySelectorAll('button')[2];

    let currentFile = null;
    let isModified = false;

    textarea.addEventListener('input', () => {
        isModified = true;
        updateTitle();
    });

    function updateTitle() {
        const title = windowDiv.querySelector('.window-title');
        title.textContent = `Text Editor${currentFile ? ` - ${currentFile}` : ''}${isModified ? ' *' : ''}`;
    }

    newButton.addEventListener('click', () => {
        if (isModified && !confirm('Discard unsaved changes?')) return;
        textarea.value = '';
        currentFile = null;
        isModified = false;
        updateTitle();
        showNotification('Text Editor', 'New document created');
    });

    openButton.addEventListener('click', () => {
        const fileName = prompt('Enter filename to open:');
        if (fileName) {
            // Simulate file content
            const sampleContent = `# Sample File: ${fileName}\n\nThis is simulated content for ${fileName}.\nYou can edit this text.\n\nNeoLinux Text Editor v1.0`;
            textarea.value = sampleContent;
            currentFile = fileName;
            isModified = false;
            updateTitle();
            showNotification('Text Editor', `Opened ${fileName}`);
        }
    });

    saveButton.addEventListener('click', () => {
        if (!currentFile) {
            currentFile = prompt('Enter filename to save:') || 'untitled.txt';
        }
        isModified = false;
        updateTitle();
        showNotification('Text Editor', `Saved ${currentFile}`);
    });
}