const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let batProcess = null;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// 监听来自渲染进程的消息
ipcMain.on('run-current-bat-file', (event) => {
  console.log('Received message from renderer: run-current-bat-file');
  const appPath = app.getAppPath();
  const batFilePath = path.join(appPath, 'testcase.bat');
  console.log(`Running current bat file: ${batFilePath}`);

  if (batProcess) {
    console.error(`Another batch file is already running.`);
    event.sender.send('bat-output', `Error: Another batch file is already running.<br>`);
    return;
  }

  // 使用相对路径启动 cmd.exe 和批处理文件，并使用 shell: true
  batProcess = spawn('cmd.exe', ['/c', batFilePath], {
    cwd: appPath,
    shell: true,
  });

  batProcess.stdout.on('data', (data) => {
    const lines = data.toString('utf8').split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.log(`stdout: ${line}`);
        event.sender.send('bat-output', `stdout: ${line}<br>`);
      }
    });
  });

  batProcess.stderr.on('data', (data) => {
    const lines = data.toString('utf8').split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.error(`stderr: ${line}`);
        event.sender.send('bat-output', `stderr: ${line}<br>`);
      }
    });
  });

  batProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    event.sender.send('bat-output', `Child process exited with code ${code}<br>`);
    batProcess = null;
    event.sender.send('task-completed'); // 任务完成
  });

  batProcess.on('error', (error) => {
    console.error(`Error: ${error.message}`);
    event.sender.send('bat-output', `Error: ${error.message}<br>`);
    event.sender.send('task-completed'); // 任务完成
  });
});