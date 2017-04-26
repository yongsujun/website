import {Injectable} from '@angular/core';
import {IUser} from './user';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class UserService {
    //private _userUrl = 'http://182.239.167.222:3000/api/users';
    private _userUrl = 'http://localhost:3000/api/users';
    constructor(private _http: Http){ }

    getUsers(): Observable<IUser[]>{
        return this._http.get(this._userUrl)
        .map((response: Response) => <IUser[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
