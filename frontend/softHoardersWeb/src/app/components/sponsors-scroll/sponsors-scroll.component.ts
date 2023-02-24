import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sponsors-scroll',
  templateUrl: './sponsors-scroll.component.html',
  styleUrls: ['./sponsors-scroll.component.scss']
})
export class SponsorsScrollComponent implements OnInit {

  images = [
    "/assets/img/bizsolutions.png",
    "/assets/img/caphyon.png",
    "/assets/img/dsis.png",
    "/assets/img/inas.png",
    "/assets/img/inspire.png",
    "/assets/img/netrom.png",
    "/assets/img/qfort.png",
    "/assets/img/topexperience.png",
    "/assets/img/topsport.png",
    "/assets/img/syncro.png",
    "/assets/img/5togo.png",
    "/assets/img/cnfb.png",
    "/assets/img/ruris.png",
    "/assets/img/ikmode.png",
    "/assets/img/hella.png",
    "/assets/img/coliseum.png",
    "/assets/img/autonom.png",
    "/assets/img/facultate.png",
    "/assets/img/asociatia.png",
    "/assets/img/ecotab.png",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
