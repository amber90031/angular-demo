import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { cleanSession } from 'selenium-webdriver/safari';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}
  articles: any[];
  keyword: string;
  tag: string;
  getTags(): Observable<any[]> {
    return this.httpClient
      .get('http://localhost:3000/tags')
      .pipe(map((response: any) => response));
  }

  loadArticles() {
    this.httpClient
      .get('https://conduit.productionready.io/api/articles')
      .subscribe((response: any) => {
        this.articles = response.articles;
      });
  }

  getArticles(): Observable<any[]> {
    return this.httpClient
      .get('http://localhost:3000/articles')
      .pipe(map((response: any) => response));
  }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }

  searchTags(tag: string) {
    this.tag = tag;
  }
}
