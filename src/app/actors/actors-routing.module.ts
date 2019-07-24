import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsListComponent } from './components/actors-list/actors-list.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'all', component: ActorsListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActorsRoutingModule { }
