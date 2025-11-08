import { Component, OnInit, ViewChild, viewChild, viewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { News } from 'src/app/services/news';
import { Article, NewsResponse } from 'src/app/interfaces';
import { ComponentsModule } from 'src/app/components/components-module';
@Component({
  selector: 'app-tap1',
  templateUrl: './tap1.page.html',
  styleUrls: ['./tap1.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonContent, IonHeader, ComponentsModule, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tap1Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infinitescroll!:IonInfiniteScroll
  public articles:Article[]=[];

  constructor( private newService:News) { }

  ngOnInit() {
    this.newService.getTopHeadLines()
      .subscribe(articles=> this.articles.push(...articles));
  }
  loadData(){
    this.newService.getTopHeadLinesByCategory('business', true)
    .subscribe(articles=>{
      if(articles.length==this.articles.length){
        this.infinitescroll.disabled=true;
        return
      }
      this.articles=articles;
      this.infinitescroll.complete();
    })
  }

}
