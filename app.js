const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: true ,
    },
  });
 try {
   win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/frontend/browser/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
 } catch (error) {
  console.log("the url isnt loading" , error)
 }


  win.on('closed', () => {
    win = null;
  });
  win.webContents.on('did-fail-load', () => {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/frontend/browser/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});