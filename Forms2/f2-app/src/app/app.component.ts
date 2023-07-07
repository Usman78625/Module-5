import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: [null, Validators.required],
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
}
