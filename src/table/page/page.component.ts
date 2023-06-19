import { Component, OnInit } from '@angular/core';
import { TableColumnDirective } from '../table-column.directive';
import { TableComponent, TableSettings } from '../table.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  standalone: true,
  imports: [TableComponent, TableColumnDirective],
})
export class PageComponent implements OnInit {
  dataSource = [
    {
      id: 1,
      name: 'Alf',
    },
    {
      id: 2,
      name: 'Al Bundy',
    },
  ];

  tableSettings: TableSettings = {
    columns: [
      {
        name: 'id',
        type: 'number',
      },
      {
        name: 'name',
        type: 'string',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
