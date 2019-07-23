import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MoviesHandlerService } from '../../services/movies-handler.service';


@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit, OnDestroy {
  private moviesStream$: Subscription;
  form: FormGroup;

  constructor(private fb: FormBuilder, private moviesService: MoviesHandlerService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[A-Za-z0-9 ]+')]],
      year: ['', [Validators.required, Validators.min(1970), Validators.max(2019)]],
      imageUrl: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(500)]],
    });
  }

  addMovie() {
    if (!this.form.invalid) {
      this.moviesStream$ = this.moviesService.addNewMovie(this.form.value).subscribe(movie => {
        this.router.navigate(['movie', 'my-movies']);
      });
    }
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnDestroy() {
    if (this.moviesStream$) {
      this.moviesStream$.unsubscribe();
    }
  }
}
