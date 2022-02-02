import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesPagesService {

  constructor(private http:HttpClient) { }
  
  getCategories(){
    const url=`${environment.apiurl}/page/categories`;
    return this.http.get<any>(url);
  }
  getPageData(alias:string){
    let serachParams=new HttpParams();
    serachParams=serachParams.append('print','preety')
    serachParams=serachParams.append('alias',alias)
    const url=`${environment.apiurl}/page/get-page-data`;
    return this.http.get<any>(url,{
      params:serachParams
    });
  }
}
