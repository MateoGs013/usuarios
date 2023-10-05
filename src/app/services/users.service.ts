import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const BASE = 'http.//localhost:3000/api/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<any>(BASE)
  }
}
