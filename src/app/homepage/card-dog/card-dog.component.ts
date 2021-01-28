import { Component, Input, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/Dog';

@Component({
  selector: 'card-dog',
  templateUrl: './card-dog.component.html',
  styleUrls: ['./card-dog.component.css'],
})
export class CardDogComponent implements OnInit {
  @Input() dog: Dog;

  constructor() {}

  ngOnInit(): void {}
}
