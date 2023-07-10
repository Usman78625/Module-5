import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
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
  error = null;
  

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    } , error =>{
      this.error = error.message;
      console.log(error);
    });
  }

  onCreatePost(postData: post) {
    // Send Http request
    this.postService.createandStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    // this.postService.fetchPosts();
    // this.isFetching = false;
    // this.loadedPosts = posts;
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>{
      this.error = error.message;
    });
  }

  onClearPosts() {
  this.postService.deletePost().subscribe(() =>{
    this.loadedPosts = [];
  });
}
  
}
