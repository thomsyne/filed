import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Filed';
  showComponent: boolean = true;

  constructor(
    private readonly router: Router
  ){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showComponent = event.url !== "/landing";
      }
    });
  }
  
}
