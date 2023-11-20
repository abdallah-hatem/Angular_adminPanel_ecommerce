import { Component, OnInit, inject } from '@angular/core';
import { SizeService } from '../../../../core/services/size.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IsMobileService } from 'src/app/shared/services/is-mobile.service';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
}

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'],
})
export class SizeComponent implements OnInit {
  sizeService = inject(SizeService);
  isMobileService = inject(IsMobileService);

  myForm: FormGroup;
  isMobile: boolean = false;

  public inputs: Inputs[] = [
    {
      labelFor: 'name',
      labelName: 'Name:',
      inputType: 'name',
      inputId: 'name',
      formControlName: 'name',
    },

  ];

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
    this.isMobile = this.isMobileService.isMobile();
  }
  onSubmit() {
    this.sizeService
      .addSize(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}
