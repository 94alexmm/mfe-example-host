import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService, MfePlugin } from '../shared/services/configuration.service';
import { tap } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-mfe-host',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CdkMenuModule, SharedModule],
  templateUrl: './mfe-host.component.html',
  styleUrl: './mfe-host.component.css'
})
export class MfeHostComponent implements OnInit {
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  viewContainer?: ViewContainerRef;
  public cachedPlugins: MfePlugin[] = [];
  constructor(private configurationService: ConfigurationService) { }
  ngOnInit(): void {
    this.configurationService.getPlugins().pipe(tap(pluginRes => {
      this.cachedPlugins = pluginRes.plugins;
    })).subscribe();
  }

  getPlugins() {
    return this.configurationService.getPlugins();
  }

  async loadRemoteComponent(componentName:string, remoteLocation: string, moduleName:string){
    this.viewContainer?.clear();
          const Component = await loadRemoteModule({
              type: 'module',
              remoteEntry: remoteLocation,
              exposedModule: moduleName
              // type: 'module',
              // remoteEntry: 'http://localhost:4201/remoteEntry.js',
              // exposedModule: './mfeChart'
          })
          .then(m => m[componentName])
         this.viewContainer!.createComponent(Component);

  }

}
