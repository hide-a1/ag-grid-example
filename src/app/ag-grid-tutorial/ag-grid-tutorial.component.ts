import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { lastValueFrom } from 'rxjs';

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  selector: 'app-ag-grid-tutorial',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  templateUrl: './ag-grid-tutorial.component.html',
  styleUrl: './ag-grid-tutorial.component.scss',
})
export class AgGridTutorialComponent {
  themeClass = 'ag-theme-quartz';
  // Row Data: The data to be displayed.
  rowData: IRow[] = [];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  // Load data into grid when ready
  constructor(private http: HttpClient) {}

  async onGridReady(params: GridReadyEvent) {
    const res = await lastValueFrom(
      this.http.get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
    );
    this.rowData = res;
  }
}
