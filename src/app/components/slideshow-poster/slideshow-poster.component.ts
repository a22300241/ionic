import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonCard } from "@ionic/angular/standalone";
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ModalController, IonicModule } from '@ionic/angular';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { register } from 'swiper/element/bundle';
import { DetalleComponent } from '../detalle/detalle.component';
register();

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe],
})
export class SlideshowPosterComponent  implements OnInit {

 @Input() peliculas:Pelicula[]=[];
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() { }
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
