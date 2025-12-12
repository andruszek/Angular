import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Person} from '../Person';
import {PersonService} from '../person-service';


@Component({
  selector: 'app-list-component',
  imports: [
    RouterLink,
  ],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.persons = this.personService.getAll();
  }

  delete(index: number): void {
    this.personService.removeByIndex(index);
    this.persons = this.personService.getAll();
  }

}
