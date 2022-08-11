import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateUserDTO, User } from '../../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users';

createNewUser(dto: CreateUserDTO){
  return this.http.post<User>(this.apiUrl, dto);
}

getAllUsers(){
  return this.http.get(this.apiUrl);
}

}

