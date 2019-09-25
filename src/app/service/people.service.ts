import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: any[] = [];

  constructor() { 
    this.people = [
      { id: 1, name: 'James1'},
      { id: 2, name: 'James2'},
      { id: 3, name: 'James3'}
    ]
  }

  getPeople(): any[] {
    return this.people;
  }

  getPerson(id: string): any {
    for (let i in this.people) {
      let person = this.people[i];
      if (id == person.id) {
        return person
      }
    }
    return null;
  }
}
