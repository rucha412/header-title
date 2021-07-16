import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { EditProfileComponent } from './components/edit-profile.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';
import { SelectProductsComponent } from './components/select-products.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Edit Profile', component: EditProfileComponent },
  { path: 'Select Products', component: SelectProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
