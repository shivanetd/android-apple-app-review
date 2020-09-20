import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppIdService {

  constructor() { }

  getAppleAppId(){
    return "583093664";
  }

  getAndroidAppId(){
    return "com.meijer.mobile.meijer";
  }
}
