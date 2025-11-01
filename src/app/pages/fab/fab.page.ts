import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonLabel, IonItem, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { ComponentsModule } from 'src/app/components/components-module';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonContent, ComponentsModule, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonList, IonLabel, IonItem, IonFab, IonFabButton, IonIcon]
})
export class FabPage implements OnInit {

  data= Array(100);

  constructor() { }

  ngOnInit() {
  }

}
