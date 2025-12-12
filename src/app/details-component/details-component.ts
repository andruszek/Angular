import {Component, inject} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PersonService} from '../person-service';
import {Person} from '../Person';


@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {

  Id: number = 0;
  person: Person | null=null;

  private activatedRoute = inject(ActivatedRoute);
  private personService = inject(PersonService);

  /* constructor() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.Id = (params['id']);
  //   });
  //
   }*/

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.Id = Number(params['id']);
      this.person = this.personService.getByIndex(this.Id);
    });
  }
}
