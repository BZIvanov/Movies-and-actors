import { TestBed } from '@angular/core/testing';

import { ActorsHandlerService } from './actors-handler.service';

describe('ActorsHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorsHandlerService = TestBed.get(ActorsHandlerService);
    expect(service).toBeTruthy();
  });
});
