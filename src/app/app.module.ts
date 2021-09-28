import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Section1Component } from './components/home/section1/section1.component';
import { Section2Component } from './components/home/section2/section2.component';
import { Section3Component } from './components/home/section3/section3.component';
import { Section4Component } from './components/home/section4/section4.component';
import { SectionComponent } from './components/home/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    SectionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
