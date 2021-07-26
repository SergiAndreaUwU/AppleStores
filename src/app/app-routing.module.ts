import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FruitDetails} from "./components/fruit-details/fruit-details.component";

import {FruitListComponent} from './components/fruit-list/fruit-list.component';

import {FruitFormComponent} from './components/fruit-form/fruit-form.component';

import {IndexComponent} from './components/index/index.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/index',
  pathMatch:'full' 
},
{
  path:'fruits',
  component: FruitDetails,
},
{
  path:'fruits/edit',
  component: FruitListComponent,
},
{
  path:'fruits/add',
  component: FruitFormComponent
},
{
  path:'fruits/edit/:id',
  component:FruitFormComponent
},
{
  path:'index',
  component: IndexComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
