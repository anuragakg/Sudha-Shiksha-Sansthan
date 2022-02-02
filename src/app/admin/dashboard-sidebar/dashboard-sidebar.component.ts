import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {
  userimagePath:any;
  constructor() { }
  
  ngOnInit(): void {
    let currentUser = JSON.parse(localStorage.getItem('authUser') || '{}');

    this.userimagePath=environment.apiurl+'/'+currentUser.user.image;
  }

}
