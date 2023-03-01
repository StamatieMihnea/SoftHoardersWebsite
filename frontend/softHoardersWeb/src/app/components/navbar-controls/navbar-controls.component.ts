import { Component, OnInit } from '@angular/core';
import { ScoringAppService } from 'src/app/services/scoring-app.service';

@Component({
  selector: 'navbar-controls',
  templateUrl: './navbar-controls.component.html',
  styleUrls: ['./navbar-controls.component.scss']
})
export class NavbarControlsComponent implements OnInit {

  constructor(protected scoringAppService : ScoringAppService) { }

  ngOnInit(): void {
  }

}
