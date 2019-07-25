import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ActorsHandlerService } from '../../services/actors-handler.service';


@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.scss']
})
export class ActorsFormComponent implements OnInit, OnDestroy {
  private addActor$: Subscription;
  formData = {
    fullName: '',
    gender: '',
    imageUrl: '',
    biography: '',
  }
  mode = 'Add New Actor';

  constructor(private actorsService: ActorsHandlerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.fullName) {
      this.formData.fullName = this.route.snapshot.queryParams.fullName;
      this.formData.gender = this.route.snapshot.queryParams.gender;
      this.formData.imageUrl = this.route.snapshot.queryParams.imageUrl;
      this.formData.biography = this.route.snapshot.queryParams.biography;
      this.mode = 'Edit Actor'
    } else {
      this.mode = 'Add New Actor'
    }
  }

  addActor(actorData: any, form: NgForm) {
    if (!form.invalid) {  
      let actorObject = {
        fullName: actorData.fullName,
        gender: actorData.gender,
        biography: actorData.biography,
        imageUrl: actorData.imageUrl
      }
      if (this.mode === 'Add New Actor') {
        this.addActor$ = this.actorsService.addNewActor(actorObject).subscribe(response => {
          this.router.navigate(['/actor', 'all']);
        });
      } else {
        let id = this.route.snapshot.queryParams.id
        this.addActor$ = this.actorsService.editActor(actorObject, id).subscribe(response => {
          this.router.navigate(['/actor', 'all']);
        });
      }
    }
  }

  ngOnDestroy() {
    if (this.addActor$) {
      this.addActor$.unsubscribe();
    }
  }
}
