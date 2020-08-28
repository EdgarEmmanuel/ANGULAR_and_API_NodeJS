import { Article } from './article';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  blogTitle:string="ARTCILE BLOG";

  baseURL:string="http://localhost:4200/";

  constructor(private client:HttpClient) { }

  private mock : Article[];

  getAllData():Observable<Article[]>{
  return this.client.get<Article[]>("http://localhost:3000/articles");
  }

  public getBlogbyId(id):Observable<Article>{
    return this.client.get<Article>("http://localhost:3000/articles/"+id);
  }


}
