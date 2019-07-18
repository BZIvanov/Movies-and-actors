import { TestBed } from '@angular/core/testing';

import { MoviesInterceptorService } from './movies-interceptor.service';

describe('MoviesInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesInterceptorService = TestBed.get(MoviesInterceptorService);
    expect(service).toBeTruthy();
  });
});
