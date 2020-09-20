import { Component, OnInit } from '@angular/core';
import { AppIdService } from "../service/app-id.service";
  import { from } from 'rxjs';

@Component({
  selector: 'app-apple-review',
  templateUrl: './apple-review.component.html',
  styleUrls: ['./apple-review.component.scss']
})
export class AppleReviewComponent implements OnInit {

  appId: String;

  constructor(appIdService: AppIdService) {
    this.appId = appIdService.getAppleAppId();
  }

  ngOnInit(): void {
  }

}
