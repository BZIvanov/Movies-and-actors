import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuardService } from './core/guards/auth-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component:  HomeComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'movie', loadChildren: './movies/movies.module#MoviesModule', canActivate: [AuthGuardService] },
  { path: 'actor', loadChildren: './actors/actors.module#ActorsModule', canActivate: [AuthGuardService] },
  { path: 'about', component:  AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
