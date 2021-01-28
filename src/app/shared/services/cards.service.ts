import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../../models/Dog';
import { DogsService } from './dogs.service';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  dogs: Dog[];

  constructor(private dogsService: DogsService) {}

  getDogs(): Dog[] {
    return this.dogsService.dogs;
  }
}
