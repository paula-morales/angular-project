import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDogComponent } from './add-dog.component';

const routes: Routes = [
  {
    path: '',
    component: AddDogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDogRoutingModule {}
