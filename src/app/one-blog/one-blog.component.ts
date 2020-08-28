import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-one-blog',
  templateUrl: './one-blog.component.html',
  styleUrls: ['./one-blog.component.css']
})
export class OneBlogComponent implements OnInit {


  blog:Article;

  constructor(private actRoute:ActivatedRoute
    ,private serv:ArticlesService,
    private titleServ:Title,
    private meta:Meta
    ) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params[("id")];
    this.serv.getBlogbyId(id).subscribe(
      (data)=>{
        this.blog=data;
        console.log(this.blog);
      }
    )

    //set the title
    this.titleServ.setTitle(`${this.blog.title} - ${this.serv.blogTitle}`);

    //set the Meta
    this.meta.addTags([
      {
        name:'description',
        description:`${this.blog.description}`
      },
      {
        name:'og:title',
        description:`${this.blog.title}-${this.serv.blogTitle}`
      },
      {
        name:'og:type',
        description:"website"
      },
      {
        name:'og:url',
        description:`${this.serv.baseURL}`
      }
    ])
    //console.log(this.blog.id);
  }

}
