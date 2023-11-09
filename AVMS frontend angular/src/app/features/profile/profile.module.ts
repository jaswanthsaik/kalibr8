import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ViewMyProfileComponent,
    EditMyProfileComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
  ]
})
export class ProfileModule { }
