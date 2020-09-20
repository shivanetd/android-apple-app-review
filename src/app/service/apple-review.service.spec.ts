import { TestBed } from '@angular/core/testing';

import { AppleReviewService } from './apple-review.service';

describe('AppleReviewService', () => {
  let service: AppleReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
