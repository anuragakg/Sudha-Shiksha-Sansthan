import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  address:any;
  constructor(private aboutService:AboutService) {
    this.address=this.aboutService.getAddress();
   }

  ngOnInit(): void {
  }

}
