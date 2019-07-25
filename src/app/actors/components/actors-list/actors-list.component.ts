import { Component, OnInit } from '@angular/core';

import { ActorsHandlerService } from '../../services/actors-handler.service';
import { Actor } from '../../../core/interfaces';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  actors: Actor[];

  constructor(private actorsService: ActorsHandlerService) { }

  ngOnInit() {
    this.actorsService.getAllActors().subscribe(response => {
      this.actors = response;
    })
  }
}
