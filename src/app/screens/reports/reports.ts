import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reports',
  styleUrl: './reports.scss',
  templateUrl: './reports.html',
})
export class Reports {
  protected readonly rows = Array.from({ length: 30 }, (_, index) => index + 1);
}
