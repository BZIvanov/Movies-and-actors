import { TestBed } from '@angular/core/testing';

import { UserHandleService } from './user-handle.service';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHandleService = TestBed.get(UserHandleService);
    expect(service).toBeTruthy();
  });
});
