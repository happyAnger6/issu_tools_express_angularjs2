import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model = new User(1, '张晓安', ['FS', 'Docker', 'Kubernetes', 'Angularjs2'], 'Support', 'admin');

  roles = ['ADMIN', 'TL', 'CMO'];

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    this.userService.addUser(this.model);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
