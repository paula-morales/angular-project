import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDogRoutingModule } from './add-dog-routing.module';
import { AddDogComponent } from './add-dog.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddDogComponent],
  imports: [
    CommonModule,
    AddDogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AddDogModule {}
