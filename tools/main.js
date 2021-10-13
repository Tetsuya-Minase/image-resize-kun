const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let win = null;

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // ブラウザウインドウを作成
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const filePath = path
    .join(__dirname, 'dist/apps/image-resize-kun/index.html')
    .replace('/tools', '');
  const appUrl = new URL(`file:///${filePath}`);
  win.loadURL(appUrl.toString());

  // dev toolを開く
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => (win = null));

  return win;
}

app.allowRendererProcessReuse = true;

app.on('ready', () => setTimeout(createWindow, 400));
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
