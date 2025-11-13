import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Movies } from 'src/app/services/movies';
import { IonContent, IonLabel, IonGrid, IonRow, IonCol, IonItem, IonNote, IonCard, IonChip } from "@ionic/angular/standalone";
import { Cast, PeliculaDetalle,  } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { SlicePipe, NgIf } from '@angular/common';

import { register } from 'swiper/element/bundle';
import { ModalController } from '@ionic/angular';
register();

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonCard, IonNote, IonItem, IonCol, IonRow, SlicePipe, IonGrid, IonLabel, IonContent, ImagenPipe, IonChip, NgIf],
})
export class DetalleComponent  implements OnInit {
 id=input();
 pelicula: PeliculaDetalle={} ;
 oculto=150;
 actores:Cast[]=[];
  constructor(private movies:Movies,private modalctr:ModalController,
  ) { }





  ngOnInit() {
    console.log(this.id);
    this.movies.getPeliculaDetalle(this.id).subscribe(resp=>{
      console.log(resp);
      this.pelicula=resp;
    });
    this.movies.getActoresPelicula(this.id).subscribe(resp=>{
      console.log(resp);
      this.actores=resp.cast;
    });
  }
  regresar (){
    this.modalctr.dismiss();
  }
}
