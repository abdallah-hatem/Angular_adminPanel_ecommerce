import { Component, inject } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-manage-colors',
  templateUrl: './manage-colors.component.html',
  styleUrls: ['./manage-colors.component.scss'],
})
export class ManageColorsComponent {
  colorService = inject(ColorService);

  colors = [];

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((res) => {
      this.colors = res.colors;
    });
  }

  handleUpdate(e: any) {
    const { id, ...data } = e.data;
    this.colorService.updateColor(id, { ...data }).subscribe();
  }

  handleDelete(e: any) {
    const { id } = e.data;
    this.colorService.deleteColor(id).subscribe();
  }
}
