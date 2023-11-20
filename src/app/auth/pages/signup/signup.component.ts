import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  authService = inject(AuthService);
  myForm: FormGroup;

  public inputs: Inputs[] = [
    {
      labelFor: 'name',
      labelName: 'Name:',
      inputType: 'name',
      inputId: 'name',
      formControlName: 'name',
    },
    {
      labelFor: 'email',
      labelName: 'Email:',
      inputType: 'email',
      inputId: 'email',
      formControlName: 'email',
    },
    {
      labelFor: 'password',
      labelName: 'Password:',
      inputType: 'password',
      inputId: 'password',
      formControlName: 'password',
    },
  ];

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.authService
      .signup(this.myForm.value)
      .subscribe((res: any) => console.log(res));
  }
}
