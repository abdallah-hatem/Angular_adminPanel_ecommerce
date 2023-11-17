import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
})
export class ManageProductsComponent implements OnInit {
  productService = inject(ProductService);
  router = inject(Router);

  products: [];

  columns = [
    { dataField: 'name', caption: 'Name', dataType: 'text' },
    {
      dataField: 'price',
      caption: 'Price',
      dataType: 'number',
      alignment: 'left',
    },
    { dataField: 'category', caption: 'Category', dataType: 'text' },
    { dataField: 'desc', caption: 'Description', dataType: 'text' },
  ];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      const editData = data.products.map((el: any) => {
        return { ...el, category: el.Category.name };
      });

      console.log(editData, 'editData');
      this.products = editData;
    });
  }

  onEditClick = (e: any) => {
    e.event.preventDefault();
    console.log(e);
    const { id } = e.row.data;

    this.router.navigate([`edit-product`,id]);
  };
  handleDelete(e: any) {
    const { id } = e.data;

    this.productService.deleteProduct(id).subscribe();
  }
}
