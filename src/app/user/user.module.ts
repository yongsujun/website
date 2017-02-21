import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { UserService } from './user.service';
import { UserListComponent } from './userlist.component';
import { UserSignUpComponent } from './userSignUp.component';

@NgModule({
  declarations:[
    UserListComponent,
    UserSignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'users', component: UserListComponent },
        { path: 'userSignUp', component: UserSignUpComponent },
    ])
  ],
  providers: [UserService],
})

export class UserModule{}
