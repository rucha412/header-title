import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { DashboardComponent } from './components/dashboard.component';
import { ProfileComponent } from './components/profile.component';
import { EditProfileComponent } from './components/edit-profile.component';
import { SelectProductsComponent } from './components/select-products.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    SelectProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
