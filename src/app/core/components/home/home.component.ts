import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {
  previews = [
    { image: 'https://cdn3.movieweb.com/i/article/os23vPHOFwDGbI4fkA2N3I0gxHEvIh/798:50/Dc-Extended-Universe-Movies-Ranked-Best-Worst-Shazam.jpg', text: 'Here you can find a list of some great movies' },
    { image: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png', text: 'Login or Register to see and interact with the site content' },
    { image: 'https://chinkeetan.com/wp-content/uploads/2018/01/enjoy.jpg', text: 'Enjoy your stay with us :)' },
  ];
  interval: any;
  index: number = 0;
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.index++;
    }, 3000);
    
  }

  ngDoCheck() {
    if (this.index === this.previews.length) {
      this.index = 0;
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
