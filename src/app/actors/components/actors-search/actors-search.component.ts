import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors-search',
  templateUrl: './actors-search.component.html',
  styleUrls: ['./actors-search.component.scss']
})
export class ActorsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchForActor(target: { search: string }) {
    console.log(target.search);
  }
}
