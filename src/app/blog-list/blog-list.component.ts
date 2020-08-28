import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  ARTICLES:Article[];

  constructor(private artSErv:ArticlesService,
    private titelPage:Title) { }

  ngOnInit(): void {
    this.artSErv.getAllData().subscribe(
      (data)=>{
        this.ARTICLES=data;
      }
    )

    this.titelPage.setTitle(`${this.artSErv.blogTitle}`);
  }

}
