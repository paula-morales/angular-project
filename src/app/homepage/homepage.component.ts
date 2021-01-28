import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Card } from '../models/Card';
import { Dog } from '../models/Dog';
import { CardsService } from '../shared/services/cards.service';
import { DogsService } from '../shared/services/dogs.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  private unsubscribe = new Subject();

  dogs: Dog[];
  isLoading: boolean;
  isError: boolean;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.dogs = this.cardsService.getDogs();
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
