import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { CardsService } from './services/cards.service';
import { DogsService } from './services/dogs.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

var COMP = [LoadingComponent, NavbarComponent];

@NgModule({
  declarations: COMP,
  exports: COMP,
  imports: [CommonModule, RouterModule],
  providers: [CardsService, DogsService],
})
export class SharedModule {}
