import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppleReviewResponse } from "../core/models/apple-review-response";

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppleReviewService {

  constructor(private http: HttpClient) { }

  getAppleReview(appId: string) : Observable<AppleReviewResponse>{
    return this.http
      .get(`${environment.apple_api_url}${appId}/sortBy=mostRecent/json`);
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }
}
