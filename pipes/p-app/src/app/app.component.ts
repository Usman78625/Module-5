import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData).subscribe(
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
    this.http.get('https://ng-template-1-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(
        map((responseData: { [x: string]: any }) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
  }
  
}
