import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {
    path: 'guide',
    component: GuideComponent 
  },
  {
    path: 'people',
    component: PeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
