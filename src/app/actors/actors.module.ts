import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ActorsSearchComponent } from './components/actors-search/actors-search.component';
import { ActorsFormComponent } from './components/actors-form/actors-form.component';
import { ActorComponent } from './components/actors-list/actor/actor.component';
import { ActorsHandlerService } from './services/actors-handler.service';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';


@NgModule({
  declarations: [
    ActorsListComponent,
    ActorsSearchComponent,
    ActorsFormComponent,
    ActorComponent,
    ActorDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ActorsRoutingModule
  ],
  providers: [
    ActorsHandlerService
  ]
})
export class ActorsModule { }
