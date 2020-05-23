import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { BasicTodComponent } from './basic-tod/basic-tod.component';


const routes: Routes = [
  { path:'bucket', component:BucketComponent },
  { path:'basictodo', component:BasicTodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
