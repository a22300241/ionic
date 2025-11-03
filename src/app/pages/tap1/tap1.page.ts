import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent } from '@ionic/angular/standalone';
import { News } from 'src/app/services/news';
import { Article, NewsResponse } from 'src/app/interfaces';
import { ComponentsModule } from 'src/app/components/components-module';
@Component({
  selector: 'app-tap1',
  templateUrl: './tap1.page.html',
  styleUrls: ['./tap1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,ComponentsModule, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent]
})
export class Tap1Page implements OnInit {
  public articles:Article[]=[];

  constructor( private newService:News) { }

  ngOnInit() {
    this.newService.getTopHeadLines()
      .subscribe(articles=> this.articles.push(...articles));
  }

}
