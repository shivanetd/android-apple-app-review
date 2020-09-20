import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidReviewComponent } from './android-review.component';

describe('AndroidReviewComponent', () => {
  let component: AndroidReviewComponent;
  let fixture: ComponentFixture<AndroidReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
