import { Component, OnInit } from '@angular/core';
import { ScoringAppService } from 'src/app/services/scoring-app.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(protected scoringAppService : ScoringAppService) { }

  ngOnInit(): void {
  }

}
