import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type TabMenuItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'p-tabmenu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-menu.html',
  styleUrl: './tab-menu.scss',
})
export class TabMenu {
  readonly model = input<TabMenuItem[]>([]);
}
