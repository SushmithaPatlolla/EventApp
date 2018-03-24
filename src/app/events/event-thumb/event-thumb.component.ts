import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/index';

@Component({
  selector: 'app-event-thumb',
  templateUrl: './event-thumb.component.html',
  styleUrls: ['./event-thumb.component.css']
})
export class EventThumbComponent implements OnInit {

  @Input() event:IEvent
  @Output() eventClick = new EventEmitter()
  handleClickMe(){
    this.eventClick.emit(this.event.name)
  }
  constructor() { }

  ngOnInit() {
  }

}
