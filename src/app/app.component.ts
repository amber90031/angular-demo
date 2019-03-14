import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';
  articles$: Observable<any[]>;

  get keyword() {
    return this.articlesService.keyword;
  }
  get tag() {
    return this.articlesService.tag;
  }

  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articlesService.getArticles();
  }
}

// https://dotblogs.com.tw/h20/2018/05/23/152941
