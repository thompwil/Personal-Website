import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userCredentials: FormGroup;
  username: string = "";
  password: string = '';

  constructor(private fb: FormBuilder) {
    this.userCredentials = this.fb.group({
      usernameValue: '',
      passwordValue: ''
    });
  }
  //Grab the inputs from the form and send them to the server to be verified
  processCredentials() {
    this.username = this.userCredentials.get('usernameValue')?.value;
    this.password = this.userCredentials.get('passwordValue')?.value;

    //TODO: API call to backend to verify credentials
    // call should return a token 
  }
}
