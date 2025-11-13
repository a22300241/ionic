import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, OnInit } from '@angular/core';
import { IonCard } from "@ionic/angular/standalone";
import { ModalController, IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

register();

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe, IonicModule],
})
export class SlideshowBackdropComponent  implements OnInit {
 @Input() peliculas:Pelicula[]=[];
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
   async verDetalle(id:any){
    const modal = await this.modalCtrl.create({
    component: DetalleComponent,
    componentProps: {
      id
    }
  });
  await modal.present();
  }
}
