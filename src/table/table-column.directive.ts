import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[tableColumn]',
})
export class TableColumnDirective {
  @Input('tableColumn') column!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
