import { Component, OnInit } from '@angular/core';
import { MockService } from './core/services/mock.service';
import { Person } from 'src/types/data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'practice_angular';

  peoples: Person[] = [];

  constructor(private readonly mock: MockService) { }

  ngOnInit(): void {
    this.mock.mockData().subscribe((data) => {
      this.peoples = data;
      console.log(this.peoples);
      
    })
  };


}
