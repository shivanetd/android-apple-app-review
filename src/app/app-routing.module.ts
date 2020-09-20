import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleReviewComponent } from './apple-review/apple-review.component';
import { AndroidReviewComponent } from './android-review/android-review.component';
import { AppConfigComponent } from './app-config/app-config.component'; 

const routes: Routes = [
  { path: 'apple-review', component: AppleReviewComponent },
  { path: 'android-review', component: AndroidReviewComponent },
  { path: 'settings', component: AppConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
