import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  QueryList,
  ContentChildren,
  ViewChild,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { TableColumnDirective } from './table-column.directive';

export type ColumnType = 'string' | 'number' | null;

export interface TableSettings {
  columns: ColumnSetting[];
}

export interface ColumnSetting {
  name: string;
  type: ColumnType;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, TableColumnDirective],
})
export class TableComponent<T>
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() settings!: TableSettings;
  @Input() dataSource: T[] = [];

  @ContentChildren(TableColumnDirective)
  customTemplates!: QueryList<TableColumnDirective>;

  @ViewChild('defaultNumberTemplate', { static: true })
  defaultNumberTemplate!: TemplateRef<any>;

  @ViewChild('defaultStringTemplate', { static: true })
  defaultStringTemplate!: TemplateRef<any>;

  @ViewChild('defaultTemplate', { static: true })
  defaultTemplate!: TemplateRef<any>;

  columns!: string[];

  ngOnInit(): void {
    this.columns = this.settings.columns.map((column) => column.name);
    console.log('ngOnInit', !!this.defaultTemplate);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', !!this.defaultTemplate);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', !!this.defaultTemplate);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit', !!this.defaultTemplate);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', !!this.defaultTemplate);
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  getTemplate(
    columnType: ColumnType,
    columnName: string
  ): TemplateRef<any> | null {
    const customTemplate = this.customTemplates.find((template) => {
      return template.column === columnName;
    });

    let template: TemplateRef<any> | null;
    if (customTemplate) {
      template = customTemplate.templateRef;
      return template;
    }

    if (columnType === 'string') {
      template = this.defaultStringTemplate;
    } else if (columnType === 'number') {
      template = this.defaultNumberTemplate;
    } else {
      template = this.defaultTemplate;
    }

    console.log({ columnName, template: !!template });
    return template;
  }
}
