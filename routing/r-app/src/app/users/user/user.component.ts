import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: {id: number, name: string}; 
  paramsubscription!: Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user= {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramsubscription= this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    );
  }
ngOnDestroy(): void {
  this.paramsubscription.unsubscribe();
}

}
// params is observable which allow you easly work with asynch task
// using subscrption to get acces to changing data
// subscription will not be destroyed even component get destroyed
// In Angular, query parameters and fragments are used to pass additional information in the URL.
// Query parameters are key-value pairs added to the URL after a question mark ? and separated by an ampersand &.
// They are used to pass data to a component or service, typically for filtering, sorting, or pagination purposes.
// Query parameters are accessible in the component or service through the ActivatedRoute service provided by Angular's Router module.
//  Query parameters are optional and can be appended to the URL dynamically or statically.
// Fragments are used to navigate to a specific section or anchor within a page.
// A fragment is represented by a hash symbol # followed by an identifier or anchor name.
// Fragments are typically used to jump to a specific section of a page when the page loads.
// Fragments are accessible in the component or service through the ActivatedRoute service provided by Angular's Router module.
// Example: https://example.com/about#team