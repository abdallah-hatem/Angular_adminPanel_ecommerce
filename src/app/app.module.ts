import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { SignupComponent } from './signup/signup.component';
import { CookieService } from 'ngx-cookie-service';
import { SizeComponent } from './size/size.component';
import { ManageSizeComponent } from './manage-size/manage-size.component';
import {
  DxDataGridModule,
  DxListModule,
  DxDropDownBoxModule,
  DxTagBoxModule,
} from 'devextreme-angular';
import { ManageColorsComponent } from './manage-colors/manage-colors.component';
import { ColorComponent } from './color/color.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddProductDetailsComponent } from './add-product-details/add-product-details.component';
import { EditProductDetailsComponent } from './edit-product-details/edit-product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
