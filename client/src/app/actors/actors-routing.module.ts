import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorsFormComponent } from './components/actors-form/actors-form.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'all', component: ActorsListComponent },
  { path: 'add', component: ActorsFormComponent },
  { path: 'edit/:id', component: ActorsFormComponent },
  { path: 'details/:id', component: ActorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule {}
