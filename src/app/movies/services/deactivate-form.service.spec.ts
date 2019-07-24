import { TestBed } from '@angular/core/testing';

import { DeactivateFormService } from './deactivate-form.service';

describe('DeactivateFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivateFormService = TestBed.get(DeactivateFormService);
    expect(service).toBeTruthy();
  });
});
