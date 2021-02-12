import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MoviesHandlerService } from '../../services/movies-handler.service';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnDestroy {
  private moviesStream$: Subscription;
  form: FormGroup;
  formData = {
    title: '',
    year: '',
    imageUrl: '',
    description: '',
  }
  mode = 'add';

  constructor(private fb: FormBuilder, private moviesService: MoviesHandlerService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.title) {
      this.formData.title = this.route.snapshot.queryParams.title;
      this.formData.imageUrl = this.route.snapshot.queryParams.imageUrl;
      this.formData.year = this.route.snapshot.queryParams.year;
      this.formData.description = this.route.snapshot.queryParams.description;
      this.mode = 'Edit Movie'
    } else {
      this.mode = 'Add New Movie'
    }

    this.form = this.fb.group({
      title: [this.formData.title, [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern('[A-Za-z0-9 \.]+')]],
      year: [this.formData.year, [Validators.required, Validators.min(1970), Validators.max(2019)]],
      imageUrl: [this.formData.imageUrl, [Validators.required, Validators.maxLength(180)]],
      description: [this.formData.description, [Validators.required, Validators.minLength(30), Validators.maxLength(500)]],
    });
  }

  addMovie() {
    if (!this.form.invalid) {
      if (this.mode === 'Add New Movie') {
        this.moviesStream$ = this.moviesService.addNewMovie(this.form.value).subscribe(movie => {
          this.router.navigate(['movie', 'my-movies']);
        });
      } else {
        this.moviesStream$ = this.moviesService.editMovie(this.form.value, this.route.snapshot.queryParams.id).subscribe(movie => {
          this.router.navigate(['movie', 'my-movies']);
        });
      }
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
