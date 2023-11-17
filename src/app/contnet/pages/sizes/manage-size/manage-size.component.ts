import { Component, OnInit, inject } from '@angular/core';
import { SizeService } from '../../../../core/services/size.service';

@Component({
  selector: 'app-manage-size',
  templateUrl: './manage-size.component.html',
  styleUrls: ['./manage-size.component.scss'],
})
export class ManageSizeComponent implements OnInit {
  sizeService = inject(SizeService);

  sizes = [];

  ngOnInit(): void {
    this.getSizes();
  }

  getSizes() {
    this.sizeService.getSizes().subscribe((res) => {
      this.sizes = res.sizes;
    });
  }

  handleUpdate(e: any) {
    const { id, name } = e.data;
    this.sizeService.updateSize(id, { name }).subscribe();
  }

  handleDelete(e: any) {
    const { id } = e.data;
    this.sizeService.deleteSize(id).subscribe();
  }
}
