import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridQuickStartComponent } from './ag-grid-quick-start/ag-grid-quick-start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridQuickStartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ag-grid-example';
}
