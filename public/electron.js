const path = require('path');
const dataHandler = require('./datahandling/datahandling')
const { app, BrowserWindow , ipcMain } = require('electron');
const isDev = require('electron-is-dev');


function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname,'preload.js')
    },
  });


  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'right' });
  }
}

app.whenReady().then(()=>{


  ipcMain.handle('load-user-data', async (event)=>{
    let userData = await dataHandler.checkUserData();
    
    if(userData == null){
      return -1;
    }else{
      return userData;
    }

    
  });
  ipcMain.on('set-title', (event, title)=>{
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  });
  
  //Must send json data as a string.
  ipcMain.on('add-note-entry', (event, data)=>{
    dataHandler.addEntry(data)
   
  });

  ipcMain.handle('edit-note-entry', async (event, data)=>{
    let editData = await dataHandler.editEntry(data)
    
    if(editData == null){
      return -1;
    }else{
      return editData;
    }

    
  });
  ipcMain.handle('save-edit-note-entry', async (event, data)=>{
    let editData = await dataHandler.saveEdit(data)
    
    if(editData == null){
      return -1;
    }else{
      return 1;
    }

    
  });

  ipcMain.on('delete-note-entry', (event, id)=>{
    
    dataHandler.deleteEntry(id)
  });

  createWindow()
});
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