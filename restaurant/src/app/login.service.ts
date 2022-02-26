import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/user/login'
  constructor(private httpClient: HttpClient) { }

  login(user: User):Observable<object> {
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
  
}
