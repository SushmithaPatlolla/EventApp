import { Routes } from "@angular/router";
import {
    EventListComponent,
    EventRouteActivator,
    EventDetailComponent,
    EventListResolver,
    CreateEventComponent,
    CreateSessionComponent
   
} from './events/index'
import { Error404Component } from "./errors/404.component";
import { Component } from "@angular/core";
import { LoginComponent } from "./events/user/login.component";
import {ProfileComponent} from './events/user/profile.component'

export const appRoutes:Routes = [
    {path: 'events/new', component:CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent']},
    {path : 'events', component : EventListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component:EventDetailComponent, canActivate : [EventRouteActivator]},
    {path: '404', component:Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'events/session/new', component:CreateSessionComponent}
]

