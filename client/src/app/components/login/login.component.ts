import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../services/user.service';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  passwd: string;
  returnUrl: string;
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router,
              private authInfo: AuthService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl');
  }

  onSubmit(): void {
    this.authInfo.setUser(new User(-1, this.name, '', '', this.passwd, [], '', ''));
    this.userService.login(this.name, this.passwd).subscribe(data => {
        if (data.length === 1) {
          this.userService.setUser(data[0]);
          this.authInfo.setUser(data[0])
          this.router.navigateByUrl( '/');
        } else {
          this.authInfo.setUser(null);
        }
    });
  }

}
