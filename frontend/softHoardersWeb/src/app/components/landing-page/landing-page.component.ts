import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScoringAppDialogComponent } from '../scoring-app-dialog/scoring-app-dialog.component';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openScoringDialog() {
    const scoringDialogRef = this.dialog.open(ScoringAppDialogComponent, {
      height: "90vh",
      maxWidth: "97vw",
      panelClass: "no-padding-dialog"
    });

    scoringDialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
