// NeoLinux Desktop Environment - Application Definitions

// Application definitions
window.apps = {
    files: {
        title: 'Files',
        content: `
            <div class="file-manager">
                <div class="file-sidebar">
                    <div class="file-sidebar-item">🏠 Home</div>
                    <div class="file-sidebar-item">📄 Documents</div>
                    <div class="file-sidebar-item">⬇️ Downloads</div>
                    <div class="file-sidebar-item">🎵 Music</div>
                    <div class="file-sidebar-item">🖼️ Pictures</div>
                    <div class="file-sidebar-item">🎬 Videos</div>
                    <div class="file-sidebar-item">💿 Computer</div>
                </div>
                <div class="file-main">
                    <h3 style="margin-bottom: 20px;">Home Directory</h3>
                    <div class="file-grid">
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">Documents</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">Downloads</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">Music</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">Pictures</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">Videos</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📁</div>
                            <div class="file-item-name">.config</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📄</div>
                            <div class="file-item-name">readme.txt</div>
                        </div>
                        <div class="file-item">
                            <div class="file-item-icon">📄</div>
                            <div class="file-item-name">notes.md</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    terminal: {
        title: 'Terminal',
        content: `
            <div class="terminal-content" id="terminal-content">
                <div class="terminal-line">NeoLinux Terminal v2.0.0</div>
                <div class="terminal-line">Type 'help' for available commands</div>
                <div class="terminal-line"></div>
                <div id="terminal-output"></div>
                <div class="terminal-input">
                    <span class="terminal-prompt">user@neolinux:~$</span>
                    <input type="text" id="terminal-input-field" autofocus>
                    <span class="terminal-cursor"></span>
                </div>
            </div>
        `
    },
    browser: {
        title: 'Firefox',
        content: `
            <div style="height: 100%; display: flex; flex-direction: column;">
                <div style="padding: 10px; background: rgba(30, 30, 45, 0.8); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <button style="padding: 6px 12px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">←</button>
                        <button style="padding: 6px 12px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">→</button>
                        <input type="text" placeholder="Enter URL or search..." style="flex: 1; padding: 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px;">
                        <button style="padding: 6px 12px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">Go</button>
                    </div>
                </div>
                <div style="flex: 1; padding: 20px; text-align: center;">
                    <h2 style="color: #00ff88; margin-bottom: 20px;">Firefox Browser</h2>
                    <p>Welcome to the NeoLinux browser experience</p>
                    <p style="margin-top: 20px; color: #888;">Built on Firefox Quantum Engine</p>
                </div>
            </div>
        `
    },
    editor: {
        title: 'Text Editor',
        content: `
            <div style="height: 100%; display: flex; flex-direction: column;">
                <div style="padding: 8px; background: rgba(20, 20, 35, 0.5); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <button style="margin-right: 10px; padding: 4px 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 3px; cursor: pointer;">New</button>
                    <button style="margin-right: 10px; padding: 4px 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 3px; cursor: pointer;">Open</button>
                    <button style="margin-right: 10px; padding: 4px 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 3px; cursor: pointer;">Save</button>
                </div>
                <textarea style="flex: 1; background: rgba(10, 10, 20, 0.8); color: #00ff88; border: none; outline: none; padding: 15px; font-family: 'Courier New', monospace; font-size: 14px; resize: none;" placeholder="Start typing..."></textarea>
            </div>
        `
    },
    homeassistant: {
        title: 'Home Assistant',
        content: `
            <div style="height: 100%; display: flex; flex-direction: column;">
                <div style="padding: 15px; background: rgba(20, 20, 35, 0.8); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <h2 style="color: #00ff88; margin: 0; display: flex; align-items: center; gap: 10px;">
                        🏠 Home Assistant Dashboard
                        <span style="font-size: 12px; background: rgba(0, 255, 136, 0.2); padding: 4px 8px; border-radius: 12px;">Connected</span>
                    </h2>
                </div>
                <div style="flex: 1; padding: 20px; overflow-y: auto;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                💡 Lighting
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(0, 0, 0, 0.3); border-radius: 6px;">
                                    <span>Living Room</span>
                                    <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
                                        <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
                                        <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #00ff88; border-radius: 24px; transition: 0.4s;"></span>
                                    </label>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(0, 0, 0, 0.3); border-radius: 6px;">
                                    <span>Kitchen</span>
                                    <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
                                        <input type="checkbox" style="opacity: 0; width: 0; height: 0;">
                                        <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #555; border-radius: 24px; transition: 0.4s;"></span>
                                    </label>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(0, 0, 0, 0.3); border-radius: 6px;">
                                    <span>Bedroom</span>
                                    <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
                                        <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
                                        <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #00ff88; border-radius: 24px; transition: 0.4s;"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                🌡️ Climate
                            </h3>
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 32px; font-weight: bold; color: #00ff88;">22°C</div>
                                <div style="font-size: 14px; color: #888;">Current Temperature</div>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Target:</span>
                                <span style="color: #00ff88;">24°C</span>
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button style="flex: 1; padding: 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">-</button>
                                <button style="flex: 1; padding: 8px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">+</button>
                            </div>
                        </div>

                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                🔒 Security
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>Front Door</span>
                                    <span style="color: #00ff88; font-size: 12px; background: rgba(0, 255, 136, 0.2); padding: 2px 6px; border-radius: 8px;">LOCKED</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>Garage</span>
                                    <span style="color: #00ff88; font-size: 12px; background: rgba(0, 255, 136, 0.2); padding: 2px 6px; border-radius: 8px;">CLOSED</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>Alarm System</span>
                                    <span style="color: #ff6b6b; font-size: 12px; background: rgba(255, 107, 107, 0.2); padding: 2px 6px; border-radius: 8px;">ARMED</span>
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                🎵 Media
                            </h3>
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 16px; font-weight: bold;">Cyberpunk Ambient</div>
                                <div style="font-size: 12px; color: #888;">Currently Playing</div>
                            </div>
                            <div style="display: flex; justify-content: center; gap: 10px;">
                                <button style="padding: 8px 12px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">⏮️</button>
                                <button style="padding: 8px 12px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">⏸️</button>
                                <button style="padding: 8px 12px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; cursor: pointer;">⏭️</button>
                            </div>
                        </div>

                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                ⚡ Energy
                            </h3>
                            <div style="margin-bottom: 10px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span>Current Usage</span>
                                    <span style="color: #00ff88;">2.4 kW</span>
                                </div>
                                <div style="background: rgba(0, 0, 0, 0.5); height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #00ff88, #00cc66); height: 100%; width: 60%;"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 12px; color: #888;">
                                <span>Today: 18.5 kWh</span>
                                <span>Cost: $2.14</span>
                            </div>
                        </div>

                        <div style="background: rgba(20, 20, 35, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                            <h3 style="color: #00ff88; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                                📡 Devices
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px;">
                                    <span>Smart TV</span>
                                    <span style="color: #00ff88;">●</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px;">
                                    <span>Robot Vacuum</span>
                                    <span style="color: #ff6b6b;">●</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px;">
                                    <span>Smart Speaker</span>
                                    <span style="color: #00ff88;">●</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px;">
                                    <span>Doorbell Camera</span>
                                    <span style="color: #00ff88;">●</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    system: {
        title: 'System Monitor',
        content: `
            <div style="padding: 20px;">
                <h2 style="color: #00ff88; margin-bottom: 20px;">System Monitor</h2>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <h3 style="color: #00ff88; margin-bottom: 10px;">CPU Usage</h3>
                        <div style="background: rgba(0, 0, 0, 0.5); height: 30px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #00ff88, #00cc66); height: 100%; width: 35%; animation: pulse 2s ease-in-out infinite;"></div>
                        </div>
                        <p style="margin-top: 8px; font-size: 14px;">35% - 4 cores</p>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <h3 style="color: #00ff88; margin-bottom: 10px;">Memory</h3>
                        <div style="background: rgba(0, 0, 0, 0.5); height: 30px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #ff6b6b, #ff3838); height: 100%; width: 62%;"></div>
                        </div>
                        <p style="margin-top: 8px; font-size: 14px;">4.9 GB / 8.0 GB</p>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <h3 style="color: #00ff88; margin-bottom: 10px;">Disk Usage</h3>
                        <div style="background: rgba(0, 0, 0, 0.5); height: 30px; border-radius: 4px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #4ecdc4, #44a3aa); height: 100%; width: 45%;"></div>
                        </div>
                        <p style="margin-top: 8px; font-size: 14px;">225 GB / 500 GB</p>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <h3 style="color: #00ff88; margin-bottom: 10px;">Network</h3>
                        <p style="font-size: 14px;">↓ 2.5 MB/s</p>
                        <p style="font-size: 14px;">↑ 0.8 MB/s</p>
                    </div>
                </div>
                <div style="margin-top: 30px;">
                    <h3 style="color: #00ff88; margin-bottom: 15px;">Running Processes</h3>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 10px; font-size: 14px;">
                            <div style="font-weight: 600; color: #00ff88;">Process</div>
                            <div style="font-weight: 600; color: #00ff88;">PID</div>
                            <div style="font-weight: 600; color: #00ff88;">CPU %</div>
                            <div style="font-weight: 600; color: #00ff88;">Memory</div>
                            <div>systemd</div><div>1</div><div>0.1%</div><div>45 MB</div>
                            <div>firefox</div><div>2847</div><div>12.5%</div><div>850 MB</div>
                            <div>gnome-shell</div><div>1523</div><div>5.2%</div><div>325 MB</div>
                            <div>code</div><div>3251</div><div>8.7%</div><div>425 MB</div>
                            <div>spotify</div><div>4102</div><div>3.1%</div><div>280 MB</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    settings: {
        title: 'Settings',
        content: `
            <div style="display: flex; height: 100%;">
                <div style="width: 200px; background: rgba(20, 20, 35, 0.5); padding: 20px; border-right: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px; background: rgba(0, 255, 136, 0.2);">🖥️ Display</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">🔊 Sound</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">📶 Network</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">⚡ Power</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">👤 Users</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">🎨 Appearance</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">📱 Applications</div>
                    <div style="padding: 10px; cursor: pointer; border-radius: 4px; margin-bottom: 5px;">ℹ️ About</div>
                </div>
                <div style="flex: 1; padding: 30px;">
                    <h2 style="color: #00ff88; margin-bottom: 20px;">Display Settings</h2>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px;">Resolution</label>
                        <select style="padding: 8px; background: rgba(20, 20, 35, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; width: 200px;">
                            <option>1920 x 1080</option>
                            <option>1600 x 900</option>
                            <option>1366 x 768</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px;">Scale</label>
                        <input type="range" min="100" max="200" value="100" style="width: 200px;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px;">Night Light</label>
                        <label style="display: flex; align-items: center; cursor: pointer;">
                            <input type="checkbox" style="margin-right: 8px;">
                            <span>Enable Night Light</span>
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    software: {
        title: 'Software Center',
        content: `
            <div style="padding: 20px;">
                <h2 style="color: #00ff88; margin-bottom: 20px;">Software Center</h2>
                <div style="margin-bottom: 20px;">
                    <input type="text" placeholder="Search applications..." style="padding: 10px; background: rgba(20, 20, 35, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); color: white; border-radius: 4px; width: 100%;">
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px;">
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; transition: all 0.3s ease;">
                        <div style="font-size: 32px; text-align: center; margin-bottom: 10px;">🎮</div>
                        <div style="text-align: center; font-weight: 600;">Steam</div>
                        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 5px;">Gaming Platform</div>
                        <button style="margin-top: 10px; width: 100%; padding: 6px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">Install</button>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; transition: all 0.3s ease;">
                        <div style="font-size: 32px; text-align: center; margin-bottom: 10px;">💻</div>
                        <div style="text-align: center; font-weight: 600;">VS Code</div>
                        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 5px;">Code Editor</div>
                        <button style="margin-top: 10px; width: 100%; padding: 6px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">Install</button>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; transition: all 0.3s ease;">
                        <div style="font-size: 32px; text-align: center; margin-bottom: 10px;">🎬</div>
                        <div style="text-align: center; font-weight: 600;">VLC</div>
                        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 5px;">Media Player</div>
                        <button style="margin-top: 10px; width: 100%; padding: 6px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">Install</button>
                    </div>
                    <div style="background: rgba(20, 20, 35, 0.5); padding: 15px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; transition: all 0.3s ease;">
                        <div style="font-size: 32px; text-align: center; margin-bottom: 10px;">🎨</div>
                        <div style="text-align: center; font-weight: 600;">GIMP</div>
                        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 5px;">Image Editor</div>
                        <button style="margin-top: 10px; width: 100%; padding: 6px; background: linear-gradient(135deg, #00ff88, #00cc66); border: none; color: black; border-radius: 4px; cursor: pointer; font-weight: 600;">Install</button>
                    </div>
                </div>
            </div>
        `
    }
};