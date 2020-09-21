import { Component, OnInit } from '@angular/core';
import { AppIdService } from "../service/app-id.service";
import { AppleReviewService } from "../service/apple-review.service";
import { from } from 'rxjs';
import { AppleReviewResponse } from "../core/models/apple-review-response";

@Component({
  selector: 'app-apple-review',
  templateUrl: './apple-review.component.html',
  styleUrls: ['./apple-review.component.scss']
})
export class AppleReviewComponent implements OnInit {

  appId: string;
  appleReview: AppleReviewResponse;

  constructor(private appIdService: AppIdService, private appleService: AppleReviewService) {
    this.appId = appIdService.getAppleAppId();
  }

  ngOnInit(): void {
    this.appleService.getAppleReview(this.appId).subscribe((reviewResposne) => {
      this.appleReview = reviewResposne;
    })
  }

}
