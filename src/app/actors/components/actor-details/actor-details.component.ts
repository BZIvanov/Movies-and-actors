import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

import { Actor } from 'src/app/core/interfaces';
import { ActorsHandlerService } from '../../services/actors-handler.service';


@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
  actor: Actor

  constructor(private route: ActivatedRoute, private actorService: ActorsHandlerService, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.actorService.getActor(id).subscribe(actor => {
      this.actor = actor;
    });
  }

  deleteActor(id: string) {
    let agreed = confirm("Are you sure you want to delete this actor?");
    if (agreed) {
      this.actorService.deleteActor(id).subscribe(data => {
        this.toastr.info("Successfully deleted actor", "Deleted!")
        this.router.navigate(['/actor', 'all']);
      })
    }
  }
}
