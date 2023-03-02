import { Component, OnInit } from '@angular/core';
import { MobileSidenavService } from 'src/app/services/mobile-sidenav.service';
import { ScoringAppService } from 'src/app/services/scoring-app.service';

@Component({
  selector: 'navbar-controls',
  templateUrl: './navbar-controls.component.html',
  styleUrls: ['./navbar-controls.component.scss'],
})
export class NavbarControlsComponent implements OnInit {
  constructor(
    protected scoringAppService: ScoringAppService,
    protected mobileSidenavService: MobileSidenavService
  ) {}

  ngOnInit(): void {}
}
