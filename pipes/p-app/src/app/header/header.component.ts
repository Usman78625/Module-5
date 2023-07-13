import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService,) { }

  onSaveData(){
this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

ngOnInit(): void {
  this.authService.user.subscribe(user =>{
    this.isAuthenticated = !!user;    
    //  !user ? false: true 
    console.log(!user);
    console.log(!!user);
    
  } );
}
ngOnDestroy(): void {
  this.userSub.unsubscribe();
}
}
