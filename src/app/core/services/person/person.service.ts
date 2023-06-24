import { Injectable } from '@angular/core';
import { PersonHttpService } from './person-http.service';
import { Person } from 'src/types/data.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly personHttp: PersonHttpService;

  constructor(personHttp: PersonHttpService) {
    this.personHttp = personHttp 
  }

  getPersons(): Observable<Person[]> {
    return this.personHttp.getPersons();
  }

}
