import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Auth } from 'src/models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth';

login(email: string, password: string){
  return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
}

profile(){
  return this.http.get(`${this.apiUrl}/profile`)
}

}
