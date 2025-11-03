import { Component, input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/index';

@Component({
  standalone:false,
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent  implements OnInit {
 articles=input<Article[]>([]);
  constructor() { }

  ngOnInit() {}

}
