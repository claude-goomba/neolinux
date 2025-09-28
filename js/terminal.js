// NeoLinux Desktop Environment - Terminal Module

// Terminal functionality
function handleTerminalInput(e) {
    const input = e.target;
    const output = document.getElementById('terminal-output');

    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command) {
            terminalHistory.push(command);
            historyIndex = terminalHistory.length;

            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">user@neolinux:~$</span> ${command}`;
            output.appendChild(commandLine);

            const response = processCommand(command);
            if (response) {
                const responseLine = document.createElement('div');
                responseLine.className = 'terminal-line';
                responseLine.textContent = response;
                output.appendChild(responseLine);
            }

            input.value = '';
            output.parentElement.scrollTop = output.parentElement.scrollHeight;
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = terminalHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < terminalHistory.length - 1) {
            historyIndex++;
            input.value = terminalHistory[historyIndex];
        } else {
            historyIndex = terminalHistory.length;
            input.value = '';
        }
    }
}

function processCommand(command) {
    const parts = command.toLowerCase().split(' ');
    const cmd = parts[0];

    switch(cmd) {
        case 'help':
            return `Available commands:
  help     - Show this help message
  clear    - Clear terminal
  ls       - List directory contents
  pwd      - Print working directory
  date     - Show current date and time
  echo     - Echo text
  uname    - Show system information
  whoami   - Show current user
  neofetch - Show system info with ASCII art
  apps     - List available applications
  exit     - Close terminal`;
        case 'clear':
            document.getElementById('terminal-output').innerHTML = '';
            return null;
        case 'ls':
            return 'Documents  Downloads  Music  Pictures  Videos  .config  readme.txt  notes.md';
        case 'pwd':
            return '/home/user';
        case 'date':
            return new Date().toString();
        case 'echo':
            return parts.slice(1).join(' ');
        case 'uname':
            return 'NeoLinux 5.15.0-generic x86_64 GNU/Linux';
        case 'whoami':
            return 'user';
        case 'neofetch':
            return `
       ██████   ███████ ██████
      ██    ██  ██     ██    ██
      ██    ██  █████  ██    ██
      ██    ██  ██     ██    ██
       ██████   ███████ ██████

      OS: NeoLinux 2.0.0
      Kernel: 5.15.0-generic
      Shell: neolinux-shell
      Terminal: NeoLinux Terminal
      CPU: Quantum Core i7-9999 (8) @ 4.2GHz
      Memory: 4912MiB / 8192MiB`;
        case 'apps':
            return 'Available applications: files, terminal, browser, editor, homeassistant, system, settings, software';
        case 'exit':
            const terminal = windows.find(w => w.app === 'terminal');
            if (terminal) {
                closeWindow(terminal.element, 'terminal');
            }
            return null;
        default:
            return `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
}