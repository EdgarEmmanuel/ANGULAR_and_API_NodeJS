import { Title } from '@angular/platform-browser';

export class Article {
    id:number;
    title:string;
    key:string;
    content:string;
    description:string;
    ImageUrl:string;
    datePost:Date=new Date();
    author:string;

    constructor(){

    }
}
