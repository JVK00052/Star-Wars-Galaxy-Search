import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  findPeople(galacticEntry: string) : Observable<any> {
    return this.http.get<any>(`${this.url}/people/?format=json&search=${galacticEntry}`)
  }
  findStarships(galacticEntry: string) : Observable<any> {
    return this.http.get<any>(`${this.url}/starships/?format=json&search=${galacticEntry}`)
  }
  findFilms(galacticEntry: string) : Observable<any> {
    return this.http.get<any>(`${this.url}/films/?format=json&search=${galacticEntry}`)
  }
}
