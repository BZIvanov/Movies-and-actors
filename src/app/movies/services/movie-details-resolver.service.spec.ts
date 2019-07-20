import { TestBed } from '@angular/core/testing';

import { MovieDetailsResolverService } from './movie-details-resolver.service';

describe('MovieDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieDetailsResolverService = TestBed.get(MovieDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
