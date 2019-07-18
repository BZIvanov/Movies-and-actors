import { TestBed } from '@angular/core/testing';

import { NotificationsInterceptorService } from './notifications-interceptor.service';

describe('NotificationsInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationsInterceptorService = TestBed.get(NotificationsInterceptorService);
    expect(service).toBeTruthy();
  });
});
