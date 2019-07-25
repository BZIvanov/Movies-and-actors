import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ActorsHandlerService } from '../../services/actors-handler.service';


@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.scss']
})
export class ActorsFormComponent implements OnInit, OnDestroy {
  private addActor$: Subscription;

  constructor(private actorsService: ActorsHandlerService, private router: Router) { }

  ngOnInit() {
  }

  addActor(actorData: any, form: NgForm) {
    if (!form.invalid) {
      let actorObject = {
        fullName: actorData.fullName,
        gender: actorData.gender,
        biography: actorData.biography,
        imageUrl: actorData.imageUrl
      }

      this.addActor$ = this.actorsService.addNewActor(actorObject).subscribe(response => {
        this.router.navigate(['/actor', 'all']);
      });
    }
  }

  ngOnDestroy() {
    if (this.addActor$) {
      this.addActor$.unsubscribe();
    }
  }
}
