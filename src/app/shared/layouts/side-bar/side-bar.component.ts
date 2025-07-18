import { Component } from '@angular/core';
import {SideContent} from "../../interfaces/side-content";

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  sideContents: SideContent[] = [
    {
      category: 'Dashboard',
      items: [
        {
          title: 'Home',
          link: '/',
          icon: 'faHome',
          children: [],
          expanded: false
        },
        {
          title: 'Users Management',
          link: '/users',
          icon: 'faHome',
          children: [],
          expanded: false
        }
      ]
    }
  ];


  toggleSubmenu(nav: any) {
    nav.expanded = !nav.expanded;
  }

}
