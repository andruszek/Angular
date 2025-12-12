import { Injectable } from '@angular/core';
import { Person} from './Person';

const STORAGE_KEY = 'persons';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor() {}

  getAll(): Person[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) as Person[] : [];
    } catch (error) {
      console.error("Blad odczytu", error);
      return [];
    }
  }

  getByIndex(index: number): Person | null {
    const persons = this.getAll();
    return persons[index] ?? null;
  }

  add(person: Person): void {
    const persons = this.getAll();
    persons.push(person);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persons));
    } catch (error) {
      console.error("Bład dodania", error);
    }
  }

  removeByIndex(index: number): void {
    const persons = this.getAll();

    if (index < 0 || index >= persons.length) {
      console.warn("Nieprawidlowy indeks:", index);
      return;
    }
    persons.splice(index, 1);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persons));
    } catch (error) {
      console.error("Bład zapisu po usunieciu", error);
    }
  }

}
