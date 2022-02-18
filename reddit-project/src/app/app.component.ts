import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{  
  articles:Article[];

  constructor()
  {
    this.articles = 
    [
      new Article("Angular", "http://angular.io", 5),
      new Article("Google", "http://google.ie", 3),
      new Article("TikTok", "http://tiktok.com", 1)
    ];
  }

  //Add a new article
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean
  {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';

    console.log(`Adding Article Title ${title.value} : and adding Article Link ${link.value}`);
    return false;
  }

  //Sort the articles by votes
  sortArticles():Article[]
  {
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }
}
