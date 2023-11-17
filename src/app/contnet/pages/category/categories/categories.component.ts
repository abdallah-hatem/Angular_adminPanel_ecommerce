import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  myForm: FormGroup;
  categoriesService = inject(CategoriesService);

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.categoriesService
      .addCategory(this.myForm.value)
      .subscribe((res) => console.log(res));
  }
}
