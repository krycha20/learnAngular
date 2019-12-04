import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { CarsComponent } from 'src/components/cars/cars.component';
import { MotorcyclesComponent } from 'src/components/motorcycles/motorcycles.component';
import { BicyclesComponent } from 'src/components/bicycles/bicycles.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'motorcycles', component: MotorcyclesComponent},
  { path: 'bicycles', component: BicyclesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
