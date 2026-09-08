import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabMenu, TabMenuItem } from './shared/tab-menu/tab-menu';

@Component({
  imports: [RouterOutlet, TabMenu],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly tabs: TabMenuItem[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Reports', routerLink: '/reports' },
  ];

  protected readonly showNotification = signal(true);

  protected toggleNotification(): void {
    this.showNotification.update((value) => !value);
  }
}
