import { TestBed } from '@angular/core/testing';

import { AndroidReviewService } from './android-review.service';

describe('AndroidReviewService', () => {
  let service: AndroidReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
