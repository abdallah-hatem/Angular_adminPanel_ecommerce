import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SizeComponent } from './size/size.component';
import { ManageSizeComponent } from './manage-size/manage-size.component';
import { AuthGuard } from './auth-guard.service';
import { ColorComponent } from './color/color.component';
import { ManageColorsComponent } from './manage-colors/manage-colors.component';
import { CategoriesComponent } from './categories/categories.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { EditProductDetailsComponent } from './edit-product-details/edit-product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-sizes', component: SizeComponent, canActivate: [AuthGuard] },
  {
    path: 'manage-sizes',
    component: ManageSizeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add-colors', component: ColorComponent, canActivate: [AuthGuard] },
  {
    path: 'manage-colors',
    component: ManageColorsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-categories',
    component: ManageCategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
