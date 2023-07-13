import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.modal";

 export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
   expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  // storing authanticated user as a subject
  // emit a new user
user = new Subject<User>();

     errorMsg!: string;
 constructor(private http: HttpClient){}

SignUp(email: string, password: string){
return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAH-oqRicUJ5LBsfPe00TsdDRNtrUdseYs', {
    email: email,
    password: password,
    returnSecureToken: true 
} 
).pipe(catchError(this.handleError ), tap(resData => {
  this.handleAuthentication(
    resData.email,
    resData.localId,
    resData.idToken,
    +resData.expiresIn
  )
})
)

}
private handleAuthentication(email: string, token: string, userid: string, expiresIn: number){
  const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
  const user = new User (email, userid, token, expirationDate,
    );
    // emitting currently logged in user using subject
    this.user.next(user);
}

Login(email: string, password: string){
 return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAH-oqRicUJ5LBsfPe00TsdDRNtrUdseYs', {
  email: email,
  password: password,
  returnSecureToken: true 
} )
   .pipe(catchError(this.handleError ),tap(resData => {
    this.handleAuthentication(
      resData.email,
      resData.localId,
      resData.idToken,
      +resData.expiresIn
    )
  }))
}
private handleError(errorRes: HttpErrorResponse){
  let errorMsg = 'An unknown error occurred';
  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMsg)
  }
    switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMsg = 'This email already exists';
        break
        case 'EMAIL_NOT_FOUND':
          errorMsg ='This email not found';
          break
          case 'INVALID_PASSWORD':
            errorMsg = 'this password is incorrect'
            break;
      }
      return throwError(errorMsg);

}

}
