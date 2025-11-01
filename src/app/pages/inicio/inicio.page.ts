import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{NavController} from'@ionic/angular'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRouterLink, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { RouterLinkActive, RouterModule } from "@angular/router";

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonIcon, RouterModule]
},)
export class InicioPage implements OnInit {
  componentes:Componente[]=[
  {
    icon:"american-football",
    name:'Action Sheet',
    redirectTo:'/action-sheet'
  },
  {
    icon:"alert-circle-outline",
    name:'Alert',
    redirectTo:'/alert'
  },
  {
    icon:"beaker-outline",
    name:'Avatar',
    redirectTo:'/avatar'
  },
  {
    icon:"radio-button-off-outline",
    name:'Buttons',
    redirectTo:'/button'
  },
  {
    icon:"card-outline",
    name:'Cards',
    redirectTo:'/card'
  },
  {
    icon:"checkmark-circle-outline",
    name:'Check',
    redirectTo:'/check'
  },
  {
    icon:"calendar-outline",
    name:'DateTime',
    redirectTo:'/date-tim'
  },
  {
    icon:"car-outline",
    name:'Fab',
    redirectTo:'/fab'
  },
  {
    icon:"checkmark-circle-outline",
    name:'Check',
    redirectTo:'/check'
  },
  {
    icon:"checkmark-circle-outline",
    name:'Check',
    redirectTo:'/check'
  },
  {
    icon:"checkmark-circle-outline",
    name:'Check',
    redirectTo:'/check'
  },
]
  constructor(private navCtrl: NavController) { }
    goToSecondPage(){
      this.navCtrl.navigateForward('/alert')
    }
    goToSecondPage1(){
      this.navCtrl.navigateForward('/action-sheet')
    }
  ngOnInit() {
  }

}
