import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel, IonButton, IonButtons, IonBackButton, IonNav } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";
import{RouterModule}from"@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonNav, IonBackButton, IonButtons,RouterModule, IonButton, IonLabel, IonTabButton, IonIcon, IonTabBar, IonTabs, IonApp, IonRouterOutlet, IonicModule],
})
export class AppComponent {
  constructor() {}
}
