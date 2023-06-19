import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableComponent, TableSettings } from './table/table.component';
import {
  ActivatedRoute,
  RouterOutlet,
  Routes,
  Router,
  provideRouter,
  RouterLink,
} from '@angular/router';
import { PageComponent } from './table/page/page.component';
import { HomeComponent } from './table/home.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TableComponent, RouterLink, RouterOutlet],
  template: `
    <h1>Hello from {{name}}!</h1>
    <div>
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="['page1']">Page 1</a>
    <a [routerLink]="['page2']">Page 2</a>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';

  constructor(private router: Router) {}
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'page1',
    component: PageComponent,
  },
  {
    path: 'page2',
    component: PageComponent,
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
