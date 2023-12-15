import { IpcRenderer, IpcRendererEvent, OpenExternalOptions } from 'electron';
import { Observable } from 'rxjs';

export interface ElectronAPI {
  // IPC STUFF
  ipcEvent$(evName: string): Observable<unknown>;

  send(channel: string, ...args: any[]): void;

  invoke(channel: string, ...args: any[]): Promise<any>;

  off(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): void;

  on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): void;

  once(
    channel: string,
    listener: (event: IpcRendererEvent, ...args: any[]) => void,
  ): void;

  setZoomFactor(zoomFactor: number): void;

  getZoomFactor(): number;

  openPath(path: string): Promise<string>;

  openExternal(url: string, options?: OpenExternalOptions): Promise<void>;

  isMacOS(): boolean;

  // TODO implement
  reloadMainWin(): void;

  openDevTools(): void;

  relaunch(): void;

  exit(exitCode: number): void;

  isSystemDarkMode(): boolean;
  getUserDataPath(): string;
}