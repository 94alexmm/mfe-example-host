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
  id: string;
  components:MfeComponent[];
  remoteLocation: string;
  configuration: {};
}

export interface WorkspaceResponse {
  workspaces: Workspace[];
}

export interface Workspace {
  id: string
}

export interface MfeComponent {
  name: string;
  moduleName:string;
  componentName: string;
}
