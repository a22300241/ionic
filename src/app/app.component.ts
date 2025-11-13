import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonTabButton, IonLabel, IonTabBar, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, RouterLink, ],
})
export class AppComponent {
  constructor() {}
}
