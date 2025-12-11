import { Component, Input } from '@angular/core';
import {RandomService} from '../random'
@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  @Input() max: number = 100;
  randomNumber: number = 0;
  comment: string = '';
  commentColor: string = '';

  constructor(private RandomService: RandomService) {}

  randomNumberGen(max:number){
    this.randomNumber=this.RandomService.randomNumberGen(max);
    this.checkComment(max);
  }

  checkComment(max: number) {
    if (this.randomNumber <= 0.5 * max) {
      this.comment = 'Liczba jest <= max';
      this.commentColor = 'green';
    } else {
      this.comment = 'Liczba jest > max';
      this.commentColor = 'red';
    }
  }
}
