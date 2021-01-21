import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { CardsService } from './services/cards.service';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  providers: [CardsService],
})
export class SharedModule {}
