import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

import { routeConfig } from './app.routes';
import { PeopleService } from './service/people.service';
import { PersonResolver } from './resolvers/person.resolver';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    PeopleComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routeConfig, {
      useHash: false,
      enableTracing: false
    }),

  ],
  providers: [PeopleService, PersonResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
