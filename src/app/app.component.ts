import { Component } from '@angular/core';
import { MfeHostComponent } from './mfe-host/mfe-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MfeHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe-host';
}
