import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabButton, IonLabel, IonTabBar, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
