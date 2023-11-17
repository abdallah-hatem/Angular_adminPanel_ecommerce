import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './contnet/pages/home/home.component';
import { ProductsComponent } from './contnet/pages/product/products/products.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { SizeComponent } from './contnet/pages/sizes/size/size.component';
import { ManageSizeComponent } from './contnet/pages/sizes/manage-size/manage-size.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { ColorComponent } from './contnet/pages/colors/color/color.component';
import { ManageColorsComponent } from './contnet/pages/colors/manage-colors/manage-colors.component';
import { CategoriesComponent } from './contnet/pages/category/categories/categories.component';
import { ManageCategoriesComponent } from './contnet/pages/category/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './contnet/pages/product/manage-products/manage-products.component';
import { EditProductDetailsComponent } from './contnet/pages/product/components/edit-product-details/edit-product-details.component';
import { EditProductComponent } from './contnet/pages/product/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
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
