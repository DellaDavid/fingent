import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserlistService } from './../../shared/services/userlist.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  addtaskFormGroup: FormGroup;
  taskList: any = [];
  tempList: any = [];
  addButtonclicked: boolean = false;
  taskStatuses = [
    {label: 'All', value: 'all'},
    {label: 'Completed', value: true},
    {label: 'Not Completed', value: false}
  ]
  // taskStatus: any = 'All';

  constructor(private _userlistService: UserlistService,
    private _route: ActivatedRoute,
    private _formbuilder: FormBuilder,
    private _router: Router) { 
      this.addtaskFormGroup = this._formbuilder.group({
        task: ['', Validators.required],
        status: ['', Validators.required],
  
      })
    }


  ngOnInit() {
    const userId = this._route.snapshot.params.id;
    this.getTaskListDetails(userId);
  }

  getTaskListDetails(id) {
    this._userlistService.getTaskList(id).subscribe(res => {
      this.taskList = res;
      this.tempList = JSON.parse(JSON.stringify(this.taskList));
    })
  }

  statusChanged(event: any){
    const status = event.target.value;
     if(status === 'all') this.taskList = JSON.parse(JSON.stringify(this.tempList));
     else if(status == 'true') (this.taskList = JSON.parse(JSON.stringify(this.tempList)).filter(task => task.completed == true ));
     else if(status == 'false') (this.taskList = JSON.parse(JSON.stringify(this.tempList)).filter(task => task.completed == false ));

  }
  addtask(){
    this.addButtonclicked =true;
  }

  save(){
    this.addButtonclicked = false;
    const addtask = {
      title : this.addtaskFormGroup.controls.task.value,
      completed : false,
    }
    this.taskList.splice(0,0,addtask);
    this.tempList.splice(0,0,addtask);
  }
}
