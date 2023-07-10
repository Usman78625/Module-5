import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { post } from './post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: post[] =  [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: post) {
    // Send Http request
    this.http.post<{name: string}>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData).subscribe(
      responseData => {
        console.log(responseData);
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPosts() {
    this.http.get<{ [x: string]: post }>('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
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
      .subscribe(posts => {
        // console.log(posts);
        this.loadedPosts = posts;
      });
  }
  
}
