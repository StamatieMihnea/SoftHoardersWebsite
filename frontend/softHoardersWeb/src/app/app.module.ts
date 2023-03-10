import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SponsorsScrollComponent } from './components/sponsors-scroll/sponsors-scroll.component';
import { ScoringAppModule } from 'src/scoring-app/app/app.module';
import { ScoringAppDialogComponent } from './components/scoring-app-dialog/scoring-app-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FastMediaComponent } from './components/fast-media/fast-media.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NavbarControlsComponent } from './components/navbar-controls/navbar-controls.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SponsorsScrollComponent,
    ScoringAppDialogComponent,
    MapComponent,
    HomeComponent,
    FastMediaComponent,
    PreloaderComponent,
    NavbarControlsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ScoringAppModule,
    MatDialogModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
