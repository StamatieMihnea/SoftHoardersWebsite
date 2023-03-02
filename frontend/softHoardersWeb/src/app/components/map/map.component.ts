import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  map: Map | undefined;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const initialState = { lng: 24.816, lat: 45.916, zoom: 6 };
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=SxDX2hTgUYas0yausssf`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    var map = this.map;

    map.on('load', function () {
      fetch('../../../assets/teams.geojson')
        .then((res) => res.json())
        .then((src) =>
          src.features.forEach((feature: any) => {
            map.loadImage(
              `../../assets/img/teams-logo/${feature.properties.id}.png`,
              function (error, image) {
                if (error) throw error;
                if (!map.hasImage(`${feature.properties.id}`))
                  map.addImage(`${feature.properties.id}`, image!);
              }
            );
          })
        );

      map.addSource('teams', {
        type: 'geojson',
        data: '../../../assets/teams.geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'teams',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#004d25',
          'circle-radius': 40,
        },
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'teams',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 18,
        },
        paint: {
          'text-color': '#ffffff',
        },
      });
      map.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'teams',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': ['get', 'id'],
          'icon-allow-overlap': true,
          'icon-size': [
            'interpolate',
            ['exponential', 1],
            ['zoom'],
            6,
            0.45,
            9,
            0.75,
            11,
            0.9,
            12,
            0.9,
            13,
            1.1,
            18,
            3,
            22,
            6,
          ],
        },
        paint: {},
      });
    });
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
}
