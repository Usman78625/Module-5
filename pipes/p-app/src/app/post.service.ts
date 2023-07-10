import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './post.modal';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createandStorePost(title: string, content: string){
    const postData: post = {title: title, content: content};
    this.http.post<{name: string}>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData).subscribe(
      responseData => {
        console.log(responseData);
      }
    )
  }
  fetchPosts(){
    // this.isFetching = true;
   return this.http.get<{ [x: string]: post }>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(
        map((responseData: { [x: string]: post }) => {
          const postArray: post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      // .subscribe(posts => {
      //   // console.log(posts);
       
      // });
  }
  deletePost(){
    return this.http.delete('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
  }
}

