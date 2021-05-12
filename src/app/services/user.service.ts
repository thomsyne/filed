import { ApiConstant } from './../core/constants/app.constants';
import { UserModel } from './../core/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient: HttpClient) { }

create(input: UserModel): Observable<UserModel>{
  return this.httpClient
  .post<UserModel>(ApiConstant.apiUrl, input)
  .pipe(
    map(
      (response) => {
        return response;
      }, (error) => {
        return error;
      }
    )
  )
}
}
