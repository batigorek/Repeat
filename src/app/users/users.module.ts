import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class UsersModule { }
