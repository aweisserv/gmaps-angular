import { NgModule } from '@angular/core'; //Módulo personalizado
import { CommonModule } from '@angular/common'; //Cosas comunes de angular; ngFor, ngIf, etc...

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
