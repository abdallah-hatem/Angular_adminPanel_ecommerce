import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../../core/services/categories.service';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categoriesService = inject(CategoriesService);
  myForm: FormGroup;
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
  }
  onSubmit() {
    console.log(this.myForm.value);

    this.categoriesService
      .addCategory(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}
