import { HeroComponent } from './../hero/hero.component';
import { FooterComponent } from './../footer/footer.component';
import { TestimonialsComponent } from './../testimonials/testimonials.component';
import { BenefitsComponent } from './../benefits/benefits.component';
import { OffersComponent } from './../offers/offers.component';
import { UserFormComponent } from './../user-form/user-form.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LandingComponent, HeroComponent, UserFormComponent, OffersComponent, BenefitsComponent, TestimonialsComponent, FooterComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class LandingModule { }
