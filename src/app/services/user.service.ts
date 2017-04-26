import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Profile } from '../shared/components/profile/profile.model';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class UserService {

  private url = 'http://www.mocky.io/v2/58fc088b0f0000d9045135d1';  // URL to web api

  constructor(private http: Http) { }

  getProfile(type: string, id: string): Promise<Profile> {
    console.log("en service llamando a "+this.url);
    return this.http
               //.get(`server/api/v2/users/${type}/${id}`)
               .get(this.url)
               .toPromise()
               .then(response => response.json() as Profile)
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
