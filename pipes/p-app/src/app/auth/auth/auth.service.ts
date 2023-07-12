import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
   expiresIn: string;
    localId: string;
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
).pipe(catchError(errorRes => {
  let errorMsg = 'An unknown error occurred';
  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMsg)
  }
    switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          this.errorMsg = 'This email already exists'
      }
      return throwError(errorMsg);
}));

}

}
