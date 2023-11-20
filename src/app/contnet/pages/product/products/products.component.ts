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
      inputType: 'name',
      inputId: 'name',
      formControlName: 'name',
    },
    {
      labelFor: 'price',
      labelName: 'Price:',
      inputType: 'price',
      inputId: 'price',
      formControlName: 'price',
    },
    {
      labelFor: 'desc',
      labelName: 'Desc:',
      inputType: 'desc',
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
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
    });

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  getStcData(e: any) {
    this.stcData = e;
  }

  onSubmit() {
    this.finalData = { ...this.myForm.value, sizeToColors: this.stcData };

    this.productService
      .addProduct(this.finalData)
      .subscribe((res) => console.log(res, 'res'));

    console.log(this.finalData, 'finalData');
  }

  // validStcData() {
  //   const temp: any[] = [];

  //   this.stcData.forEach((el: any) => {
  //     temp.push(el.sizeId);
  //   });

  //   return new Set(temp).size === temp.length;
  // }
}
