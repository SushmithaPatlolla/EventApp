import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../shared/index';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IEvent[]
  constructor(private eventservice : EventService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.events = this.route.snapshot.data['events']
    
  }

  handleClickMe(eventName){
    

  }

}
