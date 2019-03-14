import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  transform(articles: any[], keyword: any, tag: any): any {
    if (keyword) {
      articles = articles.filter(
        article => article.title.indexOf(keyword) !== -1
      );
    }
    if (tag) {
      articles = articles.filter(
        article => article.tagList.indexOf(tag) !== -1
      );
    }
    return articles;
  }
}
