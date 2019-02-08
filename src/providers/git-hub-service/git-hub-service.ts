// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";

import { User } from '../../pages/models/user.interface';
import { USER_LIST } from '../../pages/mocks/user.mocks';
import { Repository } from '../../pages/models/repository.interface';
import { REPOSITORY_LIST } from '../../pages/mocks/repository.mocks';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  private baseUrl: string= "htttps://api.github.com/users";
  private reposUrl: string= "repos";

  constructor(private http: Http) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    
    .do((data:Response) => console.log(data))
    .map((data:Response) => data.json())
    .do((data:Response) => console.log(data))
    .catch((error:Response) => Observable.throw(error.json().error || "Server error."))
  }

  getRepositoryInformation(username:string):Observable<Repository[]> {
    return this.http.get(`${this.baseURL}/${username}/${this.reposUrl}`)

  }

/*
  Finding the repositories from within the REPOSITORY_LIST, equal to the Username passed in.
  Returning the results as an Observable.
*/

  mockGetRepositoryInformation(username : string):Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

/*
  Finding the username from within the USER_LIST, equal to the Username passed in.
  Returning the results as an Observable.
*/

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  } 

  private logData(response : Response) {
    console.log(response);
  }

}
