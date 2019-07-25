import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actors-search',
  templateUrl: './actors-search.component.html',
  styleUrls: ['./actors-search.component.scss']
})
export class ActorsSearchComponent implements OnInit {
  @Output() searchedName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchForActor(target: { search: string }) {
    this.searchedName.emit(target.search);
  }
}
