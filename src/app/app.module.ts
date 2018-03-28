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
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService
} from './events/index'
import { CollapsibleWellComponent } from './common/index'
// declare let jQuery : Object
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {LoginComponent} from './events/user/login.component'
import {ProfileComponent} from './events/user/profile.component'
import {AuthService} from './events/user/auth.service'


import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import {Error404Component} from './errors/404.component';
//import { CollapsibleWellComponent } from './common/collapsible-well.component';

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
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    DurationPipe
  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,EventListResolver,AuthService,VoterService,
    {
       provide: 'canDeactivateCreateEvent', 
       useValue: checkDirtyState
  },
  // {
  //   provide: JQ_TOKEN, useValue: jQuery
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('you want to CANCEL?')
  return true
}