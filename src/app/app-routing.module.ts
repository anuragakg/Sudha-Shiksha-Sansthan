import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',children:[{
    path:'vision',component:VisionComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
