import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mfe-host',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CdkMenuModule],
  templateUrl: './mfe-host.component.html',
  styleUrl: './mfe-host.component.css'
})
export class MfeHostComponent {

}
