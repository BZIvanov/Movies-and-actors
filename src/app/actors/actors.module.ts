import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorsSearchComponent } from './components/actors-search/actors-search.component';
import { ActorsFormComponent } from './components/actors-form/actors-form.component';
import { ActorDetailsComponent } from './components/actors-list/actor-details/actor-details.component';


@NgModule({
  declarations: [ActorsListComponent, ActorsSearchComponent, ActorsFormComponent, ActorDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
