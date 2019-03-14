import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags$: Observable<any[]>;
  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    this.tags$ = this.articlesService.getTags();
  }

  searchTags(tag) {
    this.articlesService.searchTags(tag);
  }
}
