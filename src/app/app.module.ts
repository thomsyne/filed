import { LandingModule } from './components/landing/landing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addUserReducer } from './state/user.reducer';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    StoreModule.forRoot({user: addUserReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
