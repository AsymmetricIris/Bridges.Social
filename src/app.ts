import { app, BrowserWindow, ipcMain } from 'electron';
import Main from './bridges';
import * as path from "path";

Main.main(app, BrowserWindow);