import { Component } from '@angular/core';
import {Person} from '../Person';
import {PersonService} from '../person-service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-person-component',
  imports: [
    FormsModule
  ],
  templateUrl: './add-person-component.html',
  styleUrl: './add-person-component.css',
})
export class AddPersonComponent {
  person: Person = {
    address: {}
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save(): void {
    this.personService.add(this.person);
    this.router.navigate(['/']);
  }
}
