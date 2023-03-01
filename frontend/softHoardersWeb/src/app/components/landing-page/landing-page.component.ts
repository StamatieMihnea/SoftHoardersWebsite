import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScoringAppDialogComponent } from '../scoring-app-dialog/scoring-app-dialog.component';
import { ScoringAppService } from 'src/app/services/scoring-app.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(protected scoringAppService : ScoringAppService) {}

  ngOnInit(): void {}
}
