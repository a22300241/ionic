import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, output, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ModalController, IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { ParesPipe } from "../../pipes/pares-pipe";
import { DetalleComponent } from '../detalle/detalle.component';
register();
@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe, ParesPipe],
})
export class SlideshowParesComponent  implements OnInit {
  @Input() peliculas:Pelicula[]=[];
  cargarmas= output();
  /*
  @Output() cargarmas=new EventEmitter(); */
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarmas.emit();
  }
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
