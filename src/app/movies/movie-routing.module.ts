import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'add', component: AddNewMovieComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }