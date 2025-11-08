import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { News } from 'src/app/services/news';
import { Article } from 'src/app/interfaces';
import { ComponentsModule } from "src/app/components/components-module";

@Component({
  selector: 'app-tap2',
  templateUrl: './tap2.page.html',
  styleUrls: ['./tap2.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ComponentsModule]
})
export class Tap2Page implements OnInit {
@ViewChild(IonInfiniteScroll, { static: true }) infinitescroll!:IonInfiniteScroll
public categorias:string[]=['business','entertainment','general','health','science','sports','technology'];
public selectedCategory:string=this.categorias[0];
public articles:Article[]=[];
public infiniteScrollDisabled = false;

  constructor(private newsService:News) { }

  ngOnInit() {
    this.newsService.getTopHeadLinesByCategory(this.selectedCategory)
    .subscribe(articles=>{
      this.articles=[...articles]
    })
  }
  segmentChanged(event:Event){
    this.selectedCategory=(event as CustomEvent).detail.value;
    this.newsService.getTopHeadLinesByCategory(this.selectedCategory)
    .subscribe(articles=>{
      this.articles=[...articles]
    })
  }
  loadData(){
    this.newsService.getTopHeadLinesByCategory(this.selectedCategory,true)
    .subscribe(articles=>{
      if(articles.length==this.articles.length){
        this.infinitescroll.disabled =true;
        return;
      }
      this.articles=articles;
      this.infinitescroll.complete()
    })
  }

}
