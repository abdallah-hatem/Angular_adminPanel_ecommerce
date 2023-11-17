import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorService } from '../../../../core/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  myForm: FormGroup;
  colorService = inject(ColorService);

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      hex: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.colorService
      .addColor(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}
