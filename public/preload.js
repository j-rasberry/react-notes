const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('API', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    addNoteEntry: (data) => ipcRenderer.send('add-note-entry', data),
    editNoteEntry: (data) => ipcRenderer.invoke('edit-note-entry', data),
    saveEditNoteEntry: (data) => ipcRenderer.invoke('save-edit-note-entry', data),
    deleteNoteEntry: (data) => ipcRenderer.send('delete-note-entry', data),
    loadUserData: () => ipcRenderer.invoke('load-user-data'),



})