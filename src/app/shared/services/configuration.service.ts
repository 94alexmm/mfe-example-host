import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor(private httpClient: HttpClient) { }

  public getPlugins() {
    return this.httpClient.get('/api/config/plugins') as Observable<PluginResponse>
  }

  public getWorkspaces() {
    return this.httpClient.get('/api/config/workspaces') as Observable<WorkspaceResponse>
  }
}

export interface PluginResponse {
  plugins: MfePlugin[];
}

export interface MfePlugin {
  id: string
  componentName: string
  remoteLocation: string
  moduleName:string
  configuration: {}
}

export interface WorkspaceResponse {
  workspaces: Workspace[];
}

export interface Workspace {
  id: string
}
