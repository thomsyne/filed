import { UserModel } from './core/models/user.model';
import { ApplicationPaths } from './core/constants/app.constants';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './state/user.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Filed';
  showComponent: boolean = true;
  user?: UserModel;

  private userSubscription$: Subscription;

  constructor(
    private readonly router: Router,
    private store: Store<UserState>
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showComponent = event.url !== '/landing';
      }
    });
  }

  ngOnInit() {
    this.userSubscription$ = this.store
      .select('user')
      .subscribe((state) => (this.user = state[0]));
  }

  routeToRegistration() {
    this.router.navigate([ApplicationPaths.Landing]);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }
}
