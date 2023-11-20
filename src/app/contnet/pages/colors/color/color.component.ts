import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorService } from '../../../../core/services/color.service';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
  tooltipText?: string;
}

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  colorService = inject(ColorService);

  myForm: FormGroup;
  public inputs: Inputs[] = [
    {
      labelFor: 'name',
      labelName: 'Name:',
      inputType: 'text',
      inputId: 'name',
      formControlName: 'name',
    },
    {
      labelFor: 'hex',
      labelName: 'Hex:',
      inputType: 'text',
      inputId: 'hex',
      formControlName: 'hex',
      tooltipText: 'Must start with #',
    },
  ];

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      hex: new FormControl('', [
        Validators.required,
        Validators.pattern('^#.*'),
      ]),
    });
  }
  onSubmit() {
    console.log(this.myForm.value);

    this.colorService
      .addColor(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}
