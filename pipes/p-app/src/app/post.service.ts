import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './post.modal';
import { Subject, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createandStorePost(title: string, content: string){
    const postData: post = {title: title, content: content};
    this.http.post<{name: string}>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData, {
      observe: 'response'
    }).subscribe(
      responseData => {
        console.log(responseData);
      },
      error => {
        this.error.next(error.message);
      }
    )
  }
  fetchPosts(){
    // this.isFetching = true;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
   return this.http.get<{ [x: string]: post }>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json' , {
    headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
    params: searchParams
   })
      .pipe(
        map((responseData: { [x: string]: post }) => {
          const postArray: post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError(errorRes =>{
        return  throwError(errorRes);
        })
      )
      // .subscribe(posts => {
      //   // console.log(posts);
       
      // });
  }
  deletePost(){
    return this.http.delete('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
      observe: 'events'
    })
    .pipe(
      tap((event: any) =>{
        console.log(event);
        if (event .type === HttpEventType.Sent){

        }
        if (event.type === HttpEventType.Response){
          console.log(event.body);
        }
      })
    );
  }
}

