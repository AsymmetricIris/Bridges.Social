import { app, BrowserWindow, ipcMain } from 'electron';
import Main from './bridges';

Main.main(app, BrowserWindow);