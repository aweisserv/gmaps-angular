import { Component, OnInit } from '@angular/core';
import { Marcador } from './classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public marcadores: Marcador[] =[];

  lat = -33.447487;
  lng = -70.673676;

  constructor( private snackbar: MatSnackBar ) { 

    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores')! );
    }

  }

  ngOnInit(): void { }

  agregarMarcador( evento: any ) {

    const coords: { lat: number, lng: number } = evento.coords;
    console.log( evento );
    console.log( coords.lat, coords.lng );

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push( nuevoMarcador );

    this.guardarStorage();
    this.snackbar.open('Marcador añadido', '', {
      duration: 1000
    });
  }


  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }


  eliminarMarcador( i: number ) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackbar.open('Marcador eliminado', '', {
      duration: 1000
    });
  }

}
