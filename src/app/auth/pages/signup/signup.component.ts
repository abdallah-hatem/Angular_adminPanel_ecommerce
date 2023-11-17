import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  myForm: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.auth
      .signup(this.myForm.value)
      .subscribe((res: any) => console.log(res));
  }
}
