import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';
import { DynamicPagesComponent } from '../dynamic-pages/dynamic-pages.component';
//import { routes } from '../app-routing.module';
import { CategoriesPagesService } from '../_services/categories-pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:any=[];
  catData:any=[];
  defined_routes:any=[];
  //routes:Routes;
  constructor(private cat_service:CategoriesPagesService,private router:Router) {
    this.cat_service.getCategories().subscribe(
      (data)=>{
        this.categories=data;
        this.createRouteArray(data)
        
       // 
        //this.router.config[0].children?.push({path:'alias',component:ContactusComponent});
        //this.router.resetConfig(this.router.config);
        //console.log(this.router.config)
      },
      error=>{

      }
    )
   }
   createRouteArray(data:any){
    data.forEach((cat:any)=>{
      //console.log(cat)
      let alias=cat.alias;
      cat.page_ids.forEach((page:any)=>{
        this.catData='';
        //this.createRouteArray(page)
        let routePath=`${cat.alias}/:page`;
        this.router.config[0].children?.push({path:routePath,component:DynamicPagesComponent});
      })
    })
    this.router.resetConfig(this.router.config);//this is used to add dynamic routes
    
   }
  ngOnInit(): void {
  }

}
