import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OrderFormComponent } from './components/shared/order-form/order-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { OnlineComponent } from './components/pages/online/online.component';
import { ExpertCourseComponent } from './components/pages/online/courses/expert/expert.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoachCourseComponent } from './components/pages/online/courses/coach/coach.component';
import { BusinessCourseComponent } from './components/pages/online/courses/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderFormComponent,
    HomeComponent,
    OnlineComponent,
    ExpertCourseComponent,
    CoachCourseComponent,
    BusinessCourseComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterOutlet, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
