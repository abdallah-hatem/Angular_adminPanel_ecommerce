import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../core/services/product.service';
import { SizeService } from '../../../../core/services/size.service';
import { CategoriesService } from '../../../../core/services/categories.service';
import { Product } from '../../../../core/models/product';

interface Inputs {
  labelFor: string;
  labelName: string;
  inputType: string;
  inputId: string;
  formControlName: string;
}

interface FormType {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  desc: FormControl<string | null>;
  categoryId: FormControl<number | null>;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myForm: FormGroup;
  productService = inject(ProductService);
  sizeService = inject(SizeService);
  categoryService = inject(CategoriesService);

  categories: [{ id: 1; name: 'test' }];
  stcData: any[] = [];
  finalData: Product;

  public inputs: Inputs[] = [
    {
      labelFor: 'name',
      labelName: 'Name:',
      inputType: 'text',
      inputId: 'name',
      formControlName: 'name',
    },
    {
      labelFor: 'price',
      labelName: 'Price:',
      inputType: 'number',
      inputId: 'price',
      formControlName: 'price',
    },
    {
      labelFor: 'desc',
      labelName: 'Desc:',
      inputType: 'text',
      inputId: 'desc',
      formControlName: 'desc',
    },
    // {
    //   labelFor: 'category',
    //   labelName: 'Category:',
    //   inputType: 'category',
    //   inputId: 'category',
    //   formControlName: 'category',
    // },
  ];

  ngOnInit() {
    this.myForm = new FormGroup<FormType>({
      name: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
    });

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  getStcData(e: any) {
    this.stcData = e;
  }

  onSubmit() {
    this.finalData = {
      ...this.myForm.value,
      price: Number(this.myForm.get('price')?.value),
      sizeToColors: this.stcData,
    };
    console.log(this.finalData, 'finalData');

    this.productService
      .addProduct(this.finalData)
      .subscribe((res) => console.log(res, 'res'));
  }
}
