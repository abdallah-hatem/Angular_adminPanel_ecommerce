import { Component, inject } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent {
  categoriesService = inject(CategoriesService);

  categories = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((res) => {
      this.categories = res.categories;
    });
  }

  handleUpdate(e: any) {
    const { id, name } = e.data;
    this.categoriesService.updateCategory(id, { name }).subscribe();
  }

  handleDelete(e: any) {
    const { id } = e.data;
    this.categoriesService.deleteCategory(id).subscribe();
  }
}
