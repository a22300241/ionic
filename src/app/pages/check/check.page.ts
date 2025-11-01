import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { ComponentsModule } from 'src/app/components/components-module';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonContent, ComponentsModule, CommonModule, FormsModule, IonLabel, IonItem, IonList, IonCheckbox, IonButton]
})
export class CheckPage implements OnInit {
verData() {
  console.log(this.data);
}
onClick(item:any){
  console.log(item);
}
  data=[
    {
      name:'primary',
      selected:false,
    },
    {
      name:'secondary',
      selected:true,
    },
    {
      name:'tertiary',
      selected:false,
    },
    {
      name:'success',
      selected:true,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
