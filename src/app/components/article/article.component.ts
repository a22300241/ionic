import { Component, Input, input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';

@Component({
  standalone:false,
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  article=input<Article[]>([]);
  index=input<number>();

  constructor() { }

  ngOnInit() {}

}
