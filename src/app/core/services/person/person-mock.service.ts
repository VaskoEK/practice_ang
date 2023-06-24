import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/types/data.type';


@Injectable({
  providedIn: 'root'
})
export class PersonMockService {

  constructor() { }

  // visszaadandó adat
  getPersons(): Observable<Person[]> {

    let mockResponse: Person[] = [
      {
        surname: "Ács",
        firstname: "János",
        age: 39,
        nrs: {
          a: [3, 6, 4],
          b: [1, 9, 8]
        }
      },
      {
        surname: "Jakab",
        firstname: "Veronika",
        age: 36,
        nrs: {
          a: [6, 10, 3],
          b: [11, 2, 5]
        }
      }
    ];
      
    return new Observable<Person[]>((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }
}
