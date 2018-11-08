import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // we use this in template
  currentUrl: string;

  constructor(private router: Router) {
    // we will subscribed to router and every time when is route changed we will know
    // _ can be anything but for speed we can use this
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      console.log(this.currentUrl);
    });

   }

  // Class Binding deppends of route we will add class
  ngOnInit() {
    // console.log("route: " + this.currentUrl);
  }

}
