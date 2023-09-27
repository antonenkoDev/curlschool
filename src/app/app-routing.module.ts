import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {OnlineComponent} from "./components/pages/online/online.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'online', component: OnlineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
