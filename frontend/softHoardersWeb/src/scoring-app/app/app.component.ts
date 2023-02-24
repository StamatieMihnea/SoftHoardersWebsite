import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageService } from '../services/page.service';

@Component({
  selector: 'scoring-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'scoring-app';
  firstTime: number = 0;

  constructor(
    private pageService: PageService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    setTimeout(function () {
      let viewheight = window.innerHeight;
      let viewwidth = window.innerWidth;
      let viewport = document.querySelector('meta[name=viewport]');
      viewport?.setAttribute(
        'content',
        'height=' + viewheight + ', width=' + viewwidth + ', initial-scale=1.0'
      );
    }, 300);
  }

  getPage() {
    return this.pageService.getCurrentPage();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: ` <span> Press again to exit app </span>`,
  styles: [
    `
      .mat-simple-snackbar span {
        margin: auto;
        text-align: center;
      }
    `,
  ],
})
export class SnackBarComponent {}
