import { TestBed } from '@angular/core/testing';

import { NotificationInterceptorService } from './notification-interceptor.service';

describe('NotificationInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationInterceptorService = TestBed.get(NotificationInterceptorService);
    expect(service).toBeTruthy();
  });
});
