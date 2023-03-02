import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MobileSidenavService } from './services/mobile-sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Soft Hoarders';
  @ViewChild('drawer') private drawer!: MatDrawer;

  constructor(private mobileSidenavService: MobileSidenavService) { }

  ngAfterViewInit(): void {
    this.mobileSidenavService.setDrawer(this.drawer);
  }
}
