import { Component } from '@angular/core';
import { IonRouterOutlet, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel, IonButton, IonButtons, IonBackButton, IonNav, IonApp } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterModule, IonicModule],
})
export class AppComponent {
  constructor() {}
}
