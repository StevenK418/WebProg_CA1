import { Component, Input, OnInit} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  /*
    This causes a compile error as is unless 
    "strictPropertyInitialization": false is added
    to tsconfig.json.
  */
  @Input() article:Article;

  constructor() { }

  ngOnInit(): void {
  }

  voteUp():boolean
  {
    this.article.voteUp();
    return false;
  }

  voteDown():boolean
  {
    this.article.voteDown();
    return false;
  }
}
