import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../models/Card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  url_cards: string = 'http://localhost:8000/cards/';

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url_cards);
  }
}
