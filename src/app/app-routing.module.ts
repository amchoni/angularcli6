import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import a comopononets what we want to route
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  // first route like a root  
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
