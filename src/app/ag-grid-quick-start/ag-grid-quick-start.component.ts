import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-ag-grid-quick-start',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid-quick-start.component.html',
  styleUrl: './ag-grid-quick-start.component.scss',
})
export class AgGridQuickStartComponent {
  themeClass = 'ag-theme-quartz';

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
