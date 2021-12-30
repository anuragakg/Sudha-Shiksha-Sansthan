import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  address:any;
  appname:string;
  constructor(private aboutService:AboutService) {
    this.address=this.aboutService.getAddress();
    this.appname=environment.App_Name;
   }

  ngOnInit(): void {
  }

}
