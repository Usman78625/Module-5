import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { post } from './post.modal';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: post[] =  [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.fetchPosts();
  }

  onCreatePost(postData: post) {
    // Send Http request
    this.postService.createandStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts();
    // this.isFetching = false;
    // this.loadedPosts = posts;
  }

  onClearPosts() {
    // Send Http request
  }
  // private fetchPosts() {
    
  // }
  
}
