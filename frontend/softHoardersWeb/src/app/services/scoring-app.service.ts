import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScoringAppDialogComponent } from '../components/scoring-app-dialog/scoring-app-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ScoringAppService {

  constructor(private dialog: MatDialog) {
  }

  openScoringDialog() {
    const scoringDialogRef = this.dialog.open(ScoringAppDialogComponent, {
      height: "90vh",
      maxWidth: "97vw",
      panelClass: "no-padding-dialog"
    });
  }
}
