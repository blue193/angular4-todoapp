import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { PeopleService } from '../service/people.service';

@Injectable()
export class PersonResolver implements Resolve<any> {
    constructor(
        private _peopleService: PeopleService
    ) {}

    resolve( route: ActivatedRouteSnapshot ) {
        console.log('hahah');
        let personId = route.params['person-id'];
        return this._peopleService.getPerson(personId);
    }
}
