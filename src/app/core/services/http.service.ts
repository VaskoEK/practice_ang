import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MockService } from './mock.service';
import { Person } from 'src/types/data.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient, private readonly mock: MockService) { }

  getData(): Observable<Person[]> {
    if (environment.mockAPI) {
      return this.mock.mockData();
    }
    else {
      return this.getRequest(environment.apiUrl);
    }
  }

  private getRequest(path: string): Observable<any> {
    return this.http.get(path);
  }

}
