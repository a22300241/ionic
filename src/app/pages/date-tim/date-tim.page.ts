import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonButton, IonListHeader, IonDatetime, DatetimeChangeEventDetail, IonButtons } from '@ionic/angular/standalone';
import { ComponentsModule } from 'src/app/components/components-module';
import { IonDatetimeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-date-tim',
  templateUrl: './date-tim.page.html',
  styleUrls: ['./date-tim.page.scss'],
  standalone: true,
  imports: [IonContent, ComponentsModule, CommonModule, FormsModule, IonLabel, IonItem, IonList, IonListHeader, IonDatetime]
})
export class DateTimPage implements OnInit {
customYearValues= [1999, 2000, 2007] ;
cambioFecha(event:any) {
  console.log(event)
  console.log( new Date(event.detail.value))
}

  fechaNaci:Date=new Date();

  constructor() { }

  ngOnInit() {
  }

}
