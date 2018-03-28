import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../events/user/auth.service';
import { ISession } from '../../events/shared/event.model';
import {EventService} from '../../events/shared/event.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active {color: orange;}
 ` ]
})
export class NavbarComponent implements OnInit {
  searchTerm : string = ''
  foundSessions : ISession[]

  constructor(private auth: AuthService, private eventService: EventService) { }
  searchSessions(searchTerm){
  this.eventService.searchSessions(searchTerm).subscribe(sessions =>{
    this.foundSessions = sessions
    console.log(this.foundSessions)
  })
  }
  ngOnInit() {
  }

}
