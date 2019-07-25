import { Component, OnInit } from '@angular/core';

import { Actor } from 'src/app/core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { ActorsHandlerService } from '../../services/actors-handler.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
  actor: Actor

  constructor(private route: ActivatedRoute, private actorService: ActorsHandlerService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.actorService.getActor(id).subscribe(actor => {
      this.actor = actor;
    });
  }

}
