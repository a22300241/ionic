import { Component, input, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonBackButton, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonButtons, IonBackButton, IonTitle],
})
export class HeaderComponent  implements OnInit {
  titulo=input<string>('');
  constructor() { }

  ngOnInit() {}

}
