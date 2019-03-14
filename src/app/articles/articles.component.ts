import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Article } from '../articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  // articles: object; ---單純取得json資料
  @Input() articles: Article;
  // @Input() articles: any[];

  ngOnInit() {}
}
