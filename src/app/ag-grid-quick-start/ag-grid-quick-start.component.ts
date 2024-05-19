import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { CustomButtonComponent } from './custom-button/custom-button.component';

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
    { make: 'テスラ', model: 'Model Y', price: 64950, electric: true },
    { make: 'フォード', model: 'F-Series', price: 33850, electric: false },
    { make: 'トヨタ', model: 'Corolla', price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      headerName: 'メーカー & モデル',
      valueGetter: (p: ValueGetterParams) => `${p.data.make} ${p.data.model}`,
      flex: 2,
    },
    {
      field: '価格',
      valueGetter: (p) => p.data.price,
      valueFormatter: (p) => '¥' + Math.floor(p.value * 150).toLocaleString(),
      flex: 1,
    },
    {
      field: 'EV',
      valueGetter: (p) => p.data.electric,
      cellRenderer: (p: any) => {
        return p.data.electric ? '🔌' : '⛽';
      },
      flex: 1,
    },
    { field: 'button', cellRenderer: CustomButtonComponent, flex: 1 },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
