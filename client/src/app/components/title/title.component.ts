import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() subtitle = '';
  title = 'issu tools';
  user = '';
  constructor(userService: UserService) {
    this.user = userService.getCurUser() ? userService.getCurUser().Name : '无名士';
  }

  ngOnInit() {
  }

}
