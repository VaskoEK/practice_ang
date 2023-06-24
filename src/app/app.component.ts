import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types/data.type';
import { PersonService } from './core/services/person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'practice_angular';

  peoples: Person[] = [];

  constructor(
    private readonly personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe((data) => {
      this.peoples = data;
      console.log(this.peoples);
    })
  };

}
