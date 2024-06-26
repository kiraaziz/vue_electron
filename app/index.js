const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

if (require('electron-squirrel-startup')) {
  app.quit()
}

const isDev = process.env.IS_DEV === 'true'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
  })

  ipcMain.on("getVideo", (Event, arg)=>{
    console.log(arg)
  })
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    // mainWindow.webContents.openDevTools()
  } else {
    // mainWindow.removeMenu()
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'))
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})