import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
  EventListComponent,
  EventThumbComponent,
  EventService,
  EventDetailComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {LoginComponent} from './events/user/login.component'
import {ProfileComponent} from './events/user/profile.component'
import {AuthService} from './events/user/auth.service'


import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import {Error404Component} from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    LoginComponent,
    ProfileComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,EventListResolver,AuthService,
    {
       provide: 'canDeactivateCreateEvent', 
       useValue: checkDirtyState
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('you want to CANCEL?')
  return true
}