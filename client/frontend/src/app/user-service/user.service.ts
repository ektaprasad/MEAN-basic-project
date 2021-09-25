import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  performAddUser(user) {
    return this.http.post('localhost:3000/addUser',user)
  }

  getUserList() {
    return this.http.get('localhost:3000/getUser')
  }
  
}
