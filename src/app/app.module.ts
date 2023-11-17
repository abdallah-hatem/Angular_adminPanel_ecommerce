import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ProductsComponent } from './contnet/pages/product/products/products.component';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './contnet/pages/home/home.component';
import { SideNavComponent } from './shared/layout/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { SignupComponent } from './auth/pages/signup/signup.component';
import { CookieService } from 'ngx-cookie-service';
import { SizeComponent } from './contnet/pages/sizes/size/size.component';
import { ManageSizeComponent } from './contnet/pages/sizes/manage-size/manage-size.component';
import {
  DxDataGridModule,
  DxListModule,
  DxDropDownBoxModule,
  DxTagBoxModule,
} from 'devextreme-angular';
import { ManageColorsComponent } from './contnet/pages/colors/manage-colors/manage-colors.component';
import { ColorComponent } from './contnet/pages/colors/color/color.component';
import { ManageCategoriesComponent } from './contnet/pages/category/manage-categories/manage-categories.component';
import { CategoriesComponent } from './contnet/pages/category/categories/categories.component';
import { ManageProductsComponent } from './contnet/pages/product/manage-products/manage-products.component';
import { AddProductDetailsComponent } from './contnet/pages/product/components/add-product-details/add-product-details.component';
import { EditProductDetailsComponent } from './contnet/pages/product/components/edit-product-details/edit-product-details.component';
import { EditProductComponent } from './contnet/pages/product/edit-product/edit-product.component';
import { AddProductDetailsTableComponent } from './contnet/pages/product/components/add-product-details-table/add-product-details-table.component';
import { ButtonCompComponent } from './shared/components/button-comp/button-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    NavBarComponent,
    HomeComponent,
    SideNavComponent,
    SignupComponent,
    SizeComponent,
    ManageSizeComponent,
    ManageColorsComponent,
    ColorComponent,
    ManageCategoriesComponent,
    CategoriesComponent,
    ManageProductsComponent,
    AddProductDetailsComponent,
    EditProductDetailsComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgStyle,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    DxDataGridModule,
    MatIconModule,
    DxListModule,
    DxDropDownBoxModule,
    DxTagBoxModule,
    AddProductDetailsTableComponent,
    ButtonCompComponent,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
