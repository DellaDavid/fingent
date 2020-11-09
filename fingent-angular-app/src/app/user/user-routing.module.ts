import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', component: UserComponent, children: 
    [
      { path: 'userlist', component: UserlistComponent},
      { path: 'userlist/:id/todo', component: TaskComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
