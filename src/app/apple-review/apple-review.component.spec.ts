import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleReviewComponent } from './apple-review.component';

describe('AppleReviewComponent', () => {
  let component: AppleReviewComponent;
  let fixture: ComponentFixture<AppleReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
