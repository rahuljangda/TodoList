import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { BasicTodComponent } from './basic-tod/basic-tod.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:'bucket', component:BucketComponent },
  { path:'basictodo', component:BasicTodComponent},
  { path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
