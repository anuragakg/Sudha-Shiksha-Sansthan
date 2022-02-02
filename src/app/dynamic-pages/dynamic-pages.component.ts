import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesPagesService } from '../_services/categories-pages.service';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.component.html',
  styleUrls: ['./dynamic-pages.component.css']
})
export class DynamicPagesComponent implements OnInit {
  pagename: any='';
  pageData:any=[];
  constructor(private route:ActivatedRoute,private catPageService:CategoriesPagesService) { }

  ngOnInit(): void {
    this.pagename = this.route.snapshot.paramMap.get('page');
    this.catPageService.getPageData(this.pagename).subscribe((data)=>{
      this.pageData=data;
    },
    error=>{

    }
    );
  }

}
