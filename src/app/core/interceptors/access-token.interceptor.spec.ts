import { TestBed } from '@angular/core/testing';

import { AccessTokenInterceptor } from './access-token.interceptor';

describe('AccessTokenInterceptorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AccessTokenInterceptor],
    })
  );

  it('should be created', () => {
    const service: AccessTokenInterceptor = TestBed.get(AccessTokenInterceptor);
    expect(service).toBeTruthy();
  });
});
