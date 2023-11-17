import { Component, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../core/services/product.service';
import { SizeService } from '../../../../core/services/size.service';
import { CategoriesService } from '../../../../core/services/categories.service';
import { Product, ProductUpdate } from '../../../../core/models/product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../../core/models/category';

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
    name: new FormControl(String, [Validators.required]),
    price: new FormControl(Number, [Validators.required]),
    desc: new FormControl(String, [Validators.required]),
    categoryId: new FormControl(Number, [Validators.required]),
  });

  categories: Category[];
  stcData = [];
  finalData: any;
  productData: object;
  tableDefData: any;

  @Input() productId: number;

  ngOnInit() {
    // Get product id from url
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);

    // get product details by id
    this.productService.getProductById(Number(id)).subscribe((data) => {
      this.productData = data.product;

      // fill form with product data
      this.myForm.setValue({
        name: data.product.name,
        price: data.product.price,
        desc: data.product.desc,
        categoryId: data.product.categoryId,
      });

      // fill table with product data
      this.tableDefData = data.product.SizeToColors.map((el: any) => {
        return {
          id: el.id,
          size: el.sizeId,
          quantity: el.quantity,
          colors: el.colors.map((el: any) => el.id),
        };
      });
    });

    // Get categories
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  getStcData(e: any) {
    this.stcData = e;
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.productService
      .updateProduct(this.productId, this.myForm.value)
      .subscribe((res) => console.log(res, 'res'));
  }
}
