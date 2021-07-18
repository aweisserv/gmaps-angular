import { Component, OnInit } from '@angular/core';
import { Marcador } from './classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  public marcadores: Marcador[] =[];

  lat = -33.447487;
  lng = -70.673676;

  constructor( private snackbar: MatSnackBar,
               public dialog: MatDialog ) { 

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

  eliminarTodo( ) {
    if (this.marcadores){
      this.marcadores = [];
      this.guardarStorage();
      this.snackbar.open('Marcadores eliminados', '', {
        duration: 1000
      });
    }
  }

  editarMarcador( marcador: Marcador ) {

    const dialogRef = this.dialog.open( MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if ( !result ){
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackbar.open('Marcador actualizado', '', {
        duration: 1000
      });

    });

  }

}
