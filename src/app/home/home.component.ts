import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutService } from '../_services/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions:OwlOptions={
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut' // and this
  }
  slides = [
    {id: 1, img: "../assets/images/slider1.jpg"},
    {id: 2, img: "../assets/images/slider2.jpg"},
    {id: 3, img: "../assets/images/slider3.jpg"},
  ];
  whoWeAreInfo:string='';
  serviceTypes:any;
  address:any;
  constructor(private aboutService:AboutService) {
    this.whoWeAreInfo=this.aboutService.getWhoWeAre().info;
    this.serviceTypes=this.aboutService.getWhoWeAre().services;
    
   }

  ngOnInit(): void {
  }

}
