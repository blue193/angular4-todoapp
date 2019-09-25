import { Route } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';

export const routeConfig: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'people', component: PeopleComponent }
];