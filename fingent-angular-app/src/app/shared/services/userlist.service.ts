import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASEURL } from '../configs/app-constant';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private _httpClient: HttpClient) { }

  getUserList() {
    return this._httpClient.get(`${API_BASEURL}users`);
  }

  getTaskList(userId){
    return this._httpClient.get(`${API_BASEURL}users/${userId}/todos`);
  }
  
}
