import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { OneBlogComponent } from './one-blog/one-blog.component';


const routes: Routes = [
  {path:'home',component:AboutComponent},
  {path:'articles',component:BlogListComponent},
  {path:'',component:HomeComponent},
  {path:'notFound',component:NotFoundComponent},
  {path:'articles/:id',component:OneBlogComponent},
  {path:'**',redirectTo:'notFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
