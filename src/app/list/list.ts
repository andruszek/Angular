import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    NgForOf
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  list: string[] = [];
  newEntry: string = '';


  addEntry() {
    if (this.newEntry) {
      this.list.push(this.newEntry)
      this.newEntry = '';
    }
  }

  removeEntry(id: number) {
    this.list.splice(id, 1);
  }

  updateNewEntry(event: Event): void {
    this.newEntry = (event.target as HTMLInputElement).value;
  }
}
