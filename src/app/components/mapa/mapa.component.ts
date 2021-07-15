import { Component, OnInit } from '@angular/core';
import { Marcador } from './classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public marcadores: Marcador[] =[];

  lat = -33.447487;
  lng = -70.673676;

  constructor() {  }

  ngOnInit(): void {

    const nuevoMarcador = new Marcador(-33.447487, -70.673676);
    this.marcadores.push( nuevoMarcador );

  }

  agregarMarcador( evento: any ) {

    const coords: { lat: number, lng: number } = evento.coords;
    console.log( evento );
    console.log( coords.lat, coords.lng );

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push( nuevoMarcador );

  }

}
