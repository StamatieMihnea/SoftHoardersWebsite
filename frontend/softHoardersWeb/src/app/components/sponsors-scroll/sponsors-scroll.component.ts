import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sponsors-scroll',
  templateUrl: './sponsors-scroll.component.html',
  styleUrls: ['./sponsors-scroll.component.scss'],
})
export class SponsorsScrollComponent implements OnInit {
  images = [
    '/assets/img/BizSolutions.png',
    '/assets/img/Caphyon.png',
    '/assets/img/Dsis.png',
    '/assets/img/Inas.png',
    '/assets/img/Cinema Inspire.png',
    '/assets/img/Netrom Software.png',
    '/assets/img/Qfort.png',
    '/assets/img/Top Experience.png',
    '/assets/img/Topsport.png',
    '/assets/img/Syncro Soft.png',
    '/assets/img/5ToGo.png',
    '/assets/img/Cnfb.png',
    '/assets/img/Ruris.png',
    '/assets/img/Ikmode.png',
    '/assets/img/Hella.png',
    '/assets/img/Coliseum.png',
    '/assets/img/Autonom.png',
    '/assets/img/Facultatea de Mecanica Craiova.png',
    '/assets/img/Asociatia Parintilor Buzesteni.png',
    '/assets/img/Ecotab.png',
  ];

  constructor() {}

  ngOnInit(): void {}

  getSponsorName(logoPath: string): string {
    let pathComponents: string[] = logoPath.split('/');
    if (pathComponents.length == 0) {
      return 'sponsor logo';
    }

    return pathComponents[pathComponents.length - 1].split('.')[0];
  }
}
