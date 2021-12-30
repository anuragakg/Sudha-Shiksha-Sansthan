import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address:any;
  appname:string;
  currentYear:any;
  socialMedia:any;
  constructor(private aboutService:AboutService) {
    this.address=this.aboutService.getAddress();
    this.socialMedia=this.aboutService.getSocialMedia();
    this.appname=environment.App_Name;
    this.currentYear=new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
