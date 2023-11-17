import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ProductService } from '../../../../../core/services/product.service';
import { SizeService } from '../../../../../core/services/size.service';
import { ColorService } from '../../../../../core/services/color.service';
import { SizeToColorsService } from '../../../../../core/services/size-to-colors.service';
import { SizeToColorsUpdate } from '../../../../../core/models/size-to-colors';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.scss'],
})
export class EditProductDetailsComponent implements OnInit {
  sizeService = inject(SizeService);
  colorsService = inject(ColorService);
  productService = inject(ProductService);
  sizeToColorsService = inject(SizeToColorsService);
  route = inject(ActivatedRoute);

  sizesData: any[] = [];
  colorsData: any[] = [];
  stcData: object[] = [];

  editngMode = false;

  tableData: SizeToColorsUpdate[];

  @Output() stc = new EventEmitter<any>();
  @Input() defData: any;

  message: string = '';
  productId: number;
  errorMsg: string;

  constructor(private commonService: CommonService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);

    this.commonService.getUpdate().subscribe(() => {
      this.productService.getProductById(Number(id)).subscribe((data) => {
        // fill table with product data
        this.defData = data.product.SizeToColors.map((el: any) => {
          return {
            id: el.id,
            size: el.sizeId,
            quantity: el.quantity,
            colors: el.colors.map((el: any) => el.id),
          };
        });
      });
    });
  }

  ngOnInit(): void {
    this.sizeService
      .getSizes()
      .subscribe((data) => (this.sizesData = data.sizes));

    this.colorsService
      .getColors()
      .subscribe((data) => (this.colorsData = data.colors));
  }

  getData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);
    this.productService.getProductById(Number(id)).subscribe((data) => {
      // fill table with product data
      this.defData = data.product.SizeToColors.map((el: any) => {
        return {
          id: el.id,
          size: el.sizeId,
          quantity: el.quantity,
          colors: el.colors.map((el: any) => el.id),
        };
      });
    });
  }

  onSelectionChanged(
    selectedRowKeys: any,
    cellInfo: any,
    dropDownBoxComponent: any
  ) {
    cellInfo.setValue(selectedRowKeys[0]);
    if (selectedRowKeys.length > 0) {
      dropDownBoxComponent.close();
    }
  }

  calculateFilterExpression(
    filterValue: any,
    selectedFilterOperation: any,
    target: any
  ) {
    if (target === 'search' && typeof filterValue === 'string') {
      return [(this as any).dataField, 'contains', filterValue];
    }
    return function (data: any) {
      return (data.colors || []).indexOf(filterValue) !== -1;
    };
  }

  cellTemplate(container: any, options: any) {
    const noBreakSpace = '\u00A0';
    const text = (options.value || [])
      .map((element: any) => options.column.lookup.calculateCellValue(element))
      .join(', ');

    container.textContent = text || noBreakSpace;
    container.title = text;
  }

  // handleTableContent(e: any) {
  //   const tableContent: any[] = e.component
  //     .getDataSource()
  //     ?.items()
  //     ?.map((el: any) => {
  //       return {
  //         id: el.id,
  //         // sizeId: el.size,
  //         quantity: el.quantity,
  //         colors: el.colors,
  //       };
  //     });

  //   this.tableData = tableContent;
  // }

  handleRowDelete(e: any) {
    const { id } = e.data;
    this.sizeToColorsService.deleteStc(id).subscribe();
  }

  handleSubmit() {
    console.log(this.tableData[0]);

    this.sizeToColorsService.updateStc(this.tableData[0]).subscribe();
  }

  handleUpdate(e: any) {
    const { size, ...rest } = e.changes[0].data;

    this.sizeToColorsService
      .updateStc({ ...rest, sizeId: size, productId: this.productId })
      .subscribe({
        error: () => {
          this.errorMsg = 'Error! this size with the same color already exists';
          this.getData();
        },
      });
  }
}
