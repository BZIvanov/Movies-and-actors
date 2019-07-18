import { TestBed } from '@angular/core/testing';

import { MoviesHandlerService } from './movies-handler.service';

describe('MoviesHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesHandlerService = TestBed.get(MoviesHandlerService);
    expect(service).toBeTruthy();
  });
});
