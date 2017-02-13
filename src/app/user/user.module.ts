import { NgModule } from '@angular/core'
import { UserListComponent } from './userlist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations:[
    UserListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'users', component: UserListComponent },
    ])
  ]
})

export class UserModule{}
