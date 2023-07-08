import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  forbiddenusername= ['chris', 'Anna'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: [null, Validators.required, this.forbiddenNames.bind(this)],
        email: [null, [Validators.required, Validators.email]]
      }),
      gender: '',
      hobbies: this.formBuilder.array([])
    });
  }

  get hobbyControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const hobbyControl = this.formBuilder.control(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(hobbyControl);
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
  // forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
  //   if (this.forbiddenusername.includes(control.value) )  {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }
  forbiddenNames(control: FormControl): Promise<{ [s: string]: boolean } | null> {
    return new Promise((resolve) => {
      if (this.forbiddenusername.includes(control.value)) {
        resolve({ 'nameIsForbidden': true });
      } else {
        resolve(null);
      }
    });
  }
  
  
}
