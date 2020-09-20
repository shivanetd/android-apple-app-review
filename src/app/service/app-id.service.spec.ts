import { TestBed } from '@angular/core/testing';

import { AppIdService } from './app-id.service';

describe('AppIdService', () => {
  let service: AppIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
