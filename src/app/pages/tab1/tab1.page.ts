import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Movies } from 'src/app/services/movies';
import { Pelicula, RespuestaMDB } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { SlideshowBackdropComponent } from "src/app/components/slideshow-backdrop/slideshow-backdrop.component";
import { SlideshowPosterComponent } from "src/app/components/slideshow-poster/slideshow-poster.component";
import { SlideshowParesComponent } from "src/app/components/slideshow-pares/slideshow-pares.component";

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, CommonModule, FormsModule, SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent],
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(private movies: Movies) {}

  ngOnInit() {
    this.movies.getFeature().subscribe((resp: RespuestaMDB) => {
      this.peliculasRecientes = resp.results;
    });
    this.getpopulares();
  }
  cargarMas(){
    this.getpopulares();
    console.log('cargar mas');
  }
  getpopulares(){
  this.movies.getPopulares().subscribe((resp: RespuestaMDB) => {
      const arreglotem=[...this.populares,...resp.results];
       return this.populares = arreglotem;
    });
  }


}
