import { Component, OnInit } from '@angular/core';
import { UserlistService } from './../../shared/services/userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})
export class UserlistComponent implements OnInit {
  userList: any = [];
  userListcopy: any  = [];
  searchText = '';
  constructor(private _userlistService: UserlistService) { }

  ngOnInit() {
    this.getUserListDetails();
  }

  getUserListDetails(){
    this._userlistService.getUserList().subscribe(res =>{
      this.userList = res;
      this.userListcopy = JSON.parse(JSON.stringify(this.userList));
    })
  }
  
  searchFromList(){
    this.userList  = this.userListcopy.filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
