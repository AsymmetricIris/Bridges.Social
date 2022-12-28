import { app, ipcMain, BrowserWindow } from 'electron';
import path = require("path")
import url = require("url")

export default class Main {
    static mainWindow :Electron.BrowserWindow;
    static application :Electron.App;
    static BrowserWindow;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window obj
        Main.mainWindow = null;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ 
            width: 800, height: 600,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, "preload.js"),
            },
            show: false,
        });
        Main.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, '../index.html'),
            protocol: 'file:',
            slashes: true
        }));
        
        Main.mainWindow.on("ready-to-show", () => Main.mainWindow.show());
        Main.mainWindow.on("closed", Main.onClose);
        
        // Open the DevTools.
        Main.mainWindow.webContents.openDevTools();
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow): void {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    } 
}