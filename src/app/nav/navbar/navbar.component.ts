import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../events/user/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active {color: orange;}
 ` ]
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
