import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  galacticArchives: FormGroup
  galacticLocator = [{ view: "People", value: "people"}, { view: "Starships", value: "starships"}, { view: "Films", value: "films"}]
  public _data: any = [];

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
   
  ngOnInit() {
    this.galacticArchives = this.formBuilder.group({
      galacticEntry: new FormControl(),
      galacticLocator: new FormControl(),
    })
  }
  onSubmit() : void {
    if (this.galacticArchives.controls["galacticLocator"].value === "people") {
      this.dataService.findPeople(this.galacticArchives.controls["galacticEntry"].value).subscribe((res: any) => { this._data = res })
    } else if (this.galacticArchives.controls["galacticLocator"].value === "starships") {
      this.dataService.findStarships(this.galacticArchives.controls["galacticEntry"].value).subscribe((res: any) => { this._data = res })
    } else {
      this.dataService.findFilms(this.galacticArchives.controls["galacticEntry"].value).subscribe((res: any) => { this._data = res })
    }
  }

}
