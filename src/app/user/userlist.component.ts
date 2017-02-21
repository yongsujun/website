import { Component } from '@angular/core';
import {IUser} from './user';
import {UserService} from './user.service';

@Component({
  //selector: 'app-root'
  templateUrl: './userlist.html'
  //styleUrls: ['./app.component.css']
})
export class UserListComponent {
    pageTitle:string = 'Members';
    users: IUser[];
    errorMessage:string;

    constructor(private _userService:UserService){

    }

    ngOnInit():void{
        this._userService.getUsers()
        .subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
    }

}
