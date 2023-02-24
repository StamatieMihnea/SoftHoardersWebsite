import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private pageService: PageService) {
  }

  onPageChange(pageNumber: number) {
    this.pageService.setCurrentPage(pageNumber);
  }

  ngOnInit(): void {
  }

}
