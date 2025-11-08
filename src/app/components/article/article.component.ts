import { Component, Input, input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { Browser } from '@capacitor/browser';
import { BrowserModule } from '@angular/platform-browser';
import{ActionSheetController} from'@ionic/angular'

@Component({
  standalone:false,
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  article=input<Article[]>([]);
  index=input<number>();

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {}
  onOpenMenu(){

  }
   async openArticle(){
    const actionSheet= await this.actionSheetCtrl.create({
      header:'Opciones',
      buttons:[
        {
          text:'compartir',
          handler:()=>this.onShareArticle()
        },
        {
          text:'Favorito',
          handler:()=>this.onToggleFavorite()
        }
      ]
    })
    await actionSheet.present();
  }
  onShareArticle(){
    console.log('share article');
  }
  onToggleFavorite(){
    console.log('toogle favorite');
  }


}
