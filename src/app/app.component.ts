import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabButton, IonLabel, IonTabBar, IonTabs, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonIcon, IonTabs, IonTabBar, IonLabel, IonTabButton,RouterModule, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
