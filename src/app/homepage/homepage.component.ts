import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CardsService } from '../shared/services/cards.service';

import { Card } from '../models/Card';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  private unsubscribe = new Subject();

  cards: Card[];
  isLoading: boolean;
  isError: boolean;

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.isLoading = true;
    this.cardService
      .getCards()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (cards: Card[]) => {
          this.cards = cards;
          this.cleanError();
        },
        (error) => this.handleError
      );
  }

  cleanError() {
    this.isLoading = false;
    this.isError = false;
  }

  handleError() {
    this.isError = true;
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
