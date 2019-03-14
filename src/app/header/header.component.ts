import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = '';
  sKeyword = '';
  isHighlight = false;
  FontSize = '1.5rem';
  NeedFill = true;
  @Output() HeadOut = new EventEmitter<string>();

  constructor(private articlesService: ArticleService) {}

  ngOnInit() {}

  search($event) {
    this.articlesService.searchArticles(this.keyword);
  }

  showSearch(value: string) {
    this.sKeyword = 'I want to search... "' + value + '".';
  }

  setHighlight() {
    this.isHighlight = true;
    this.FontSize = '2.5rem';
  }

  ckNeedFill(value: string) {
    this.NeedFill = value ? false : true;
  }

  research() {
    this.keyword = '';
    this.articlesService.searchArticles(this.keyword);
  }
}
