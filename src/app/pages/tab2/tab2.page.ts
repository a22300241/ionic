import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonSearchbar,
  IonList,
  IonListHeader,
  IonModal ,
  IonButton, IonGrid, IonCol, IonRow, IonSpinner, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Movies } from 'src/app/services/movies';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardSubtitle, IonCard, IonSpinner, IonRow, IonCol, IonGrid,
    CommonModule,
    FormsModule,
    IonListHeader,
    IonList,
    IonSearchbar,
    IonContent,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem, ImagenPipe, IonHeader],
     providers: [ModalController]
})
export class Tab2Page implements OnInit {
  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'Ironman', 'Capitan America', 'Thor'];
  peliculas:Pelicula[] = [];
  buscando=false;
  constructor(private movies:Movies,private modalCtrl:ModalController) {}

  ngOnInit( ) {}

  buscar(event: any) {
  const valor = event.target.value;
  this.buscando=true;
  this.movies.buscarPeliculas(valor).subscribe(resp => {
    console.log(resp);
    this.peliculas = resp.results;
    this.buscando=false;
  });
  }

  seleccionarIdea(idea: string) {
    this.textoBuscar = idea;
    this.buscar({ target: { value: idea } });
  }
  async detalle(id:any){
          const modal = await this.modalCtrl.create({
          component: DetalleComponent,
          componentProps: {
            id
          }
        });
        await modal.present();
        }
}


