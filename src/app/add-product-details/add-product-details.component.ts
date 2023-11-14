import { Component, inject, Output, EventEmitter, OnInit } from '@angular/core';
import { SizeService } from '../size.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-add-product-details',
  templateUrl: './add-product-details.component.html',
  styleUrls: ['./add-product-details.component.scss'],
})
export class AddProductDetailsComponent implements OnInit {
  sizeService = inject(SizeService);
  colorsService = inject(ColorService);

  sizesData: any[] = [];
  colorsData: any[] = [];
  stcData: object[] = [];

  @Output() stc = new EventEmitter<any>();

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
      .items()
      .map((el: any) => {
        return {
          sizeId: el.size,
          quantity: el.quantity,
          colors: el.colors,
        };
      });

    console.log(tableContent, 'TAbLE CONTENT');

    this.stc.emit(tableContent);
  }
}
