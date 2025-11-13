import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class DatalocalService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async guardar(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async obtener(key: string) {
    return await this.storage.get(key);
  }

  async eliminar(key: string) {
    await this.storage.remove(key);
  }
}


/* import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class Datalocal {
  peliculas:PeliculaDetalle[]=[];
  constructor(private storage:Storage) { }
  guardarPelicula(pelicula:PeliculaDetalle){
    this.peliculas.push(pelicula);
    this.storage.set('peliculas',this.peliculas);
  }
}
 */
