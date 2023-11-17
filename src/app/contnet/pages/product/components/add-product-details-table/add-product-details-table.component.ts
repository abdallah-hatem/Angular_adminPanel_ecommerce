import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxTagBoxModule } from 'devextreme-angular';
import {
  SizeToColorsAdd,
  SizeToColorsUpdate,
} from '../../../../../core/models/size-to-colors';
import { SizeService } from '../../../../../core/services/size.service';
import { ColorService } from '../../../../../core/services/color.service';
import { ProductService } from '../../../../../core/services/product.service';
import { SizeToColorsService } from '../../../../../core/services/size-to-colors.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-add-product-details-table',
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxTagBoxModule],
  templateUrl: './add-product-details-table.component.html',
  styleUrl: './add-product-details-table.component.scss',
})
export class AddProductDetailsTableComponent {
  sizeService = inject(SizeService);
  colorsService = inject(ColorService);
  productService = inject(ProductService);
  sizeToColorsService = inject(SizeToColorsService);

  @Input() productId: number;

  sizesData: any[] = [];
  colorsData: any[] = [];
  stcData: object[] = [];
  dataSource = [];

  editngMode = false;

  tableData: SizeToColorsAdd[];

  errorMsg: string;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.sizeService
      .getSizes()
      .subscribe((data) => (this.sizesData = data.sizes));

    this.colorsService
      .getColors()
      .subscribe((data) => (this.colorsData = data.colors));
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

  handleTableContent(e: any) {
    const tableContent: any[] = e.component
      .getDataSource()
      ?.items()
      ?.map((el: any) => {
        return {
          sizeId: el.size,
          quantity: el.quantity,
          colors: el.colors,
        };
      });

    this.tableData = tableContent;
    console.log(this.tableData);
  }

  inEditingMode(bool: boolean) {
    this.editngMode = !bool;
  }

  handleRowDelete(e: any) {
    const { id } = e.data;
    this.sizeToColorsService.deleteStc(id).subscribe();
  }

  handleSubmit() {
    this.tableData.forEach(
      (el) =>
        this.sizeToColorsService
          .addStc({ ...el, productId: this.productId })
          .subscribe({
            error: (err) => {
              this.errorMsg = err.error.message;
              this.dataSource = [];
              alert(this.errorMsg);
            },
            complete: () => {
              this.sendMessage();
              this.dataSource = [];
            },
          })
      // window.location.reload();
    );
  }

  sendMessage() {
    this.commonService.sendUpdate('new testtt');
  }
}
