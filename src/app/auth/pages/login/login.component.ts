import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cookieService = inject(CookieService);
  authService = inject(AuthService);
  router = inject(Router);

  myForm: FormGroup;

  public inputs: Inputs[] = [
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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.authService.login(this.myForm.value).subscribe((res: any) => {
      this.cookieService.set('jwt', res.jwt);

      // TODO verify jwt

      if (this.cookieService.check('jwt')) this.router.navigate([`/`]);
    });
  }
}
