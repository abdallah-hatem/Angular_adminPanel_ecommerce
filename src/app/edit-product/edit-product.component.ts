import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { SizeService } from '../size.service';
import { CategoriesService } from '../categories.service';
import { Product, ProductUpdate } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  productService = inject(ProductService);
  sizeService = inject(SizeService);
  categoryService = inject(CategoriesService);
  route = inject(ActivatedRoute);

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  });

  categories: Category[];

  stcData = [];

  finalData: any;
  productData: object;

  tableDefData: any;

  productId: number;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);

    this.productService.getProductById(Number(id)).subscribe((data) => {
      this.productData = data.product;

      this.myForm.setValue({
        name: data.product.name,
        price: data.product.price,
        desc: data.product.desc,
        categoryId: data.product.categoryId,
      });

      this.tableDefData = data.product.SizeToColors.map((el: any) => {
        return {
          size: el.sizeId,
          quantity: el.quantity,
          colors: el.colors.map((el: any) => el.id),
        };
      });
      console.log(data.product);
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
      .updateProduct(this.productId, this.finalData)
      .subscribe((res) => console.log(res, 'res'));
    console.log(this.finalData, 'finalData');
  }
}
