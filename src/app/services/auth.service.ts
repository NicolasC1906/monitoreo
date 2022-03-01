import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserResponse, User } from '../models/user.model';
import { map } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  Login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}login`, authData)
      .pipe(
          map((res: UserResponse) => {
            console.log('Res->', res);
            // saveToken()
          }),
        catchError((err) => this.handleError(err))
      );
  }

  login(): void{}
  logout(): void{}
  private readToken(): void {}
  private saveToke(): void {}
  private handleError(err): Observable<never> {
    let errorMessage = 'Error recibiendo Datos';
    if(err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
