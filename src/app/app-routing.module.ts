import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VisionComponent } from './vision/vision.component';
import { AuthGuard } from './_guard/auth.guard';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';

const routes: Routes = [
  {
    path:'',
    component:SiteLayoutComponent,
    children:[
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'about-us',children:[{
           path:'vision',component:VisionComponent
        }]
      },
      {path:'contact-us',component:ContactusComponent}
    ]
  },
  {
    path:'',
    component:AdminLayoutComponent,canActivate:[AuthGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        pathMatch:'full'
      },
      {
        path:'profile',
        component:UserprofileComponent,
        pathMatch:'full'
      }
      
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
