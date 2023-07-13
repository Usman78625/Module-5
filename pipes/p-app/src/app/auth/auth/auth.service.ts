import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

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
     errorMsg!: string;
 constructor(private http: HttpClient){}

SignUp(email: string, password: string){
return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAH-oqRicUJ5LBsfPe00TsdDRNtrUdseYs', {
    email: email,
    password: password,
    returnSecureToken: true 
} 
).pipe(catchError(this.handleError )
  
);

}
Login(email: string, password: string){
 return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAH-oqRicUJ5LBsfPe00TsdDRNtrUdseYs', {
  email: email,
  password: password,
  returnSecureToken: true 
} )
   .pipe(catchError(this.handleError ))
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
