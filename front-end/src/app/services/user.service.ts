import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  env = environment;
  constructor(private http: HttpClient) { }

  getAll(currentPage:any): Observable<any> {
    return this.http.get(this.env.api_base_url+'/github/search_repo?repo=angular&page='+currentPage+'&limit=100');
  }

  findByTitle(title:any, currentPage:any): Observable<any> {
    return this.http.get(`${this.env.api_base_url}/github/search_repo?repo=${title}&page=${currentPage}&limit=100`);
  }

  findByUserName(username:any, currentPage:any): Observable<any> {
    return this.http.get(`${this.env.api_base_url}/github/search_repo?repo=${username}&page=${currentPage}&limit=100`);
  }

}
