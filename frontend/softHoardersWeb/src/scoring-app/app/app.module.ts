import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { RemotePageComponent } from '../components/remote-page/remote-page.component';
import { TraditionalPageComponent } from '../components/traditional-page/traditional-page.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RemotePageComponent,
    TraditionalPageComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatButtonToggleModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class ScoringAppModule {}
