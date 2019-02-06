// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

import { User } from '../../pages/models/user.interface';
import { USER_LIST } from '../../pages/mocks/user.mocks';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  constructor() {
    console.log('Hello GitHubServiceProvider Provider');
  }

/*
  Finding the username from within the USER_LIST, equal to the Username passed in.
  Returning the results as an Observable.
*/

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  } 

}
