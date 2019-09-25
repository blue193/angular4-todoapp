import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  person: any;

  constructor(
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.person = this._activateRoute.snapshot.data['person'];
    console.log('person data = ', this.person)
  }

}
