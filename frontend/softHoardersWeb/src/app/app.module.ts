import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SponsorsScrollComponent } from './components/sponsors-scroll/sponsors-scroll.component';
import { ScoringAppModule } from 'src/scoring-app/app/app.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingPageComponent, SponsorsScrollComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ScoringAppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
