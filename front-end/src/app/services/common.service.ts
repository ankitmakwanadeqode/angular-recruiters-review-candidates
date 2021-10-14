import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = environment.api_base_url;

  constructor(private http: HttpClient) { }

  getAll(currentPage:object): Observable<any> {
    return this.http.get(this.baseUrl+'/github/search_repo?repo=angular&page='+currentPage+'&limit=100');
  }

  findByTitle(title:string, currentPage:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/github/search_repo?repo=${title}&page=${currentPage}&limit=100`);
  }

  findByUserName(userName:string, currentPage:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/github/search_user?user=${userName}&page=${currentPage}&limit=20`);
  }

}
